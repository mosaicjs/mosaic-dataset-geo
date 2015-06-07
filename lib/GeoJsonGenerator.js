export default class GeoJsonGenerator {

    constructor(options){
        options = options || {};
        this.bbox = options.bbox || [-180, 90, 180, -90];
        this.precision = options.precision || 6;
    }
    
    round(val, precision) { 
        precision = precision || this.precision;
        return +((+val).toFixed(precision));
    }
    random(from, to) { return this.round(from + Math.random() * (to - from)); }
    randomLng(){ return this.random(this.bbox[0], this.bbox[2]); } 
    randomLat(){ return this.random(this.bbox[1], this.bbox[3]); } 
    randomLngLat(){ return [ this.randomLng(), this.randomLat() ]; }
    randomPoint() {
        return {
            type: 'Feature',
            geometry: {
                type : 'Point',
                coordinates : this.randomLngLat()
            }
        };
    }
    randomPoints(number){
        let result = [];
        for (let i = 0; i < number; i++) {
            result.push(this.randomPoint());
        }
        return result;
    }
    
}
