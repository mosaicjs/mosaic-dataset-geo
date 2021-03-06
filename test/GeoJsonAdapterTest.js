import expect from 'expect.js';

import { AdapterManager } from 'mosaic-adapters';
import { DataSet, Data } from 'mosaic-dataset';
import { GeoJsonAdapter, GeoJsonGenerator } from '..';

const BBOX = [1, 40, 3, 60];
describe('GeoJsonAdapter', function() {
    let generator = new GeoJsonGenerator({ bbox : BBOX, precision: 4 });
    
    it('should provide transparent access (to read/write) to the underlying data', function(){
        let adapters = new AdapterManager();
        let item = new Data({adapters});
        let data = generator.randomPoint();
        let adapter = item.getAdapter(GeoJsonAdapter);
        adapter.data = data;
        expect(adapter.data).to.be(data);
        expect(item.data).to.be(data);
        
        let newData = generator.randomPoint();
        item.data = newData;
        expect(adapter.data).to.be(newData);
        expect(item.data).to.be(newData);
    });
    
    
    it('should provide access to bounding boxes of individual items', function(){
        let adapters = new AdapterManager();
        let item = new Data({adapters});
        let data = generator.randomPoint();
        item.data = data;
        let adapter = item.getAdapter(GeoJsonAdapter);
        expect(!!adapter).to.be(true);
        expect(adapter.data).to.be(data);
        let bbox = adapter.boundingBox;
        expect(!!bbox).to.be(true);
        expect(bbox.length).to.be(4);
        expect(containedIn(BBOX, bbox)).to.be(true);
        expect(containedIn(bbox, data.geometry.coordinates)).to.be(true);
    });
    
    it('should provide access to bounding boxes for datasets', function(){
        let dataSet = new DataSet();
        let points = generator.randomPoints(100);
        dataSet.items = points;
        
        let adapter = dataSet.getAdapter(GeoJsonAdapter);
        expect(!!adapter).to.be(true);
        expect(adapter.item).to.be(dataSet);

        let bbox = adapter.boundingBox;
        expect(!!bbox).to.be(true);
        expect(bbox.length).to.be(4);
        expect(containedIn(BBOX, bbox)).to.be(true);
        let pointsInBbox = true;
        for (let i=0; pointsInBbox && i<points.length; i++) {
            let point = points[i];
            pointsInBbox = containedIn(bbox, point.geometry.coordinates) 
        }
        expect(pointsInBbox).to.be(true);
    });
});

function containedIn(containerBbox, bbox) {
    if (bbox.length === 2) { 
        // it is a point
        let newBbox = [bbox[0], bbox[1], bbox[0], bbox[1]];
        bbox = newBbox;
    }
    let result = (
        (bbox[0] >= containerBbox[0]) &&
        (bbox[1] >= containerBbox[1]) &&
        (bbox[2] <= containerBbox[2]) &&
        (bbox[3] <= containerBbox[3])
    );
    return result;
}