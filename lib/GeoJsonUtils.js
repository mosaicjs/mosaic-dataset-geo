import TurfExtent from  'turf-extent';

/**
 * This adapters treats all data set resources as GeoJson objects and provides
 * some utility methods.
 */
export default class GeoJsonUtils {
    
    /**
     * Returns a bounding box around the underlying resource.
     */
    static getBoundingBox(resource) {
        var bbox;
        resource.visit({
            before: function(r) {
                var data = r.data;
                if (!data.geometry)
                    return;
                var box = TurfExtent(data.geometry);
                if (bbox) {
                    box = [ Math.min(bbox[0], box[0]), Math.min(bbox[1], box[1]),
                            Math.max(bbox[2], box[2]), Math.max(bbox[3], box[3]) ];
                }
                bbox = box;
            }
        });
        return bbox;
    }
    
    /**
     * Returns <code>true</code> if the specified bounding box is empty.
     * 
     * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
     */
    static isEmptyBox(box, precision) {
        if (!box)
            return true;
        var first = this.round(box[0], precision);
        var second = this.round(box[1], precision);
        var third = this.round(box[2], precision);
        var fourth = this.round(box[3], precision);
        return (first === third && second === fourth);
    }

    /**
     * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
     */
    static round(val, precision) {
        precision = precision || 6;
        return (+val).toFixed(precision);
    }

}
