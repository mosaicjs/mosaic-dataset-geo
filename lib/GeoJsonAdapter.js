import GeoJsonUtils from './GeoJsonUtils';

/**
 * This adapters treats all data set as GeoJson objects and provides some
 * utility methods.
 */
export default class GeoJsonAdapter {

    /**
     * The main constructor initializing the internal data field.
     */
    constructor(options, item) {
        options = options || {};
        this.item = item || options.item;
    }

    /** getter/setter methods for the "item" property */
    get item(){ return this._item || {}; }
    set item(item){ this._item = item || {}; }

    /** Returns the data object associated with the underlying item */
    get data() { return this.item.data; } 
    set data(data) { this.setData(data); } 
    setData(data){
        let item = this.item;
        if (item.setData){
            return item.setData(data);
        } else {
            return item.data = data;
        }
    }

    /** Returns a bounding box around the underlying item. */
    get boundingBox() { return GeoJsonUtils.getBoundingBox(this.item); }

    /** Returns the central point for this item. */
    get centerPoint() {
        return {
            type : 'Point',
            geometry : {
                coordinates : this.center
            }
        };
    }

    /** Returns the coordinates of the center for this item. */
    get center() {
        return GeoJsonUtils.getCenter(this.item);
    }


}
