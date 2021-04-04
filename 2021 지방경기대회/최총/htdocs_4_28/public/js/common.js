location.getQueryString = function() {
    let search = this.search.substr(1);
    if(!search) return {}
    else { 
        return search.split("&").reduce((p,c )=> {
            let [key, value] = c.split("=");
            p[key] = value;
            return p;
        }, {})
    }
} 