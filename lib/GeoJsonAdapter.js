import GeoJsonUtils from './GeoJsonUtils';

/**
 * This adapters treats all data set resources as GeoJson objects and provides
 * some utility methods.
 */
export default class GeoJsonAdapter {

    /**
     * The main constructor initializing the internal resource field.
     */
    constructor(options, resource) {
        options = options || {};
        this.resource = resource || options.resource; 
    }
    
    /** getter/setter methods for the "resource" property */
    get resource(){ return this._resource || {}; }
    set resource(resource){ this._resource = resource || {}; }
    
    /** Returns the data object associated with the underlying resource */
    get data() { return this.resource.data; } 
    set data(data) { this.setData(data); } 
    setData(data){
        let resource = this.resource;
        if (resource.setData){
            return resource.setData(data);
        } else {
            return resource.data = data;
        }
    }
    
    /** Returns a bounding box around the underlying resource. */
    get boundingBox() { return GeoJsonUtils.getBoundingBox(this.resource); }
    

}

