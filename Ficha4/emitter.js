 function Emitter() {  
    //adicionar uma propriedade ou objeto
    this.events = {};
 }

Emitter.prototype.on = function(event_name,listener) {
    if(this.events[event_name] == undefined) {
        this.events[event_name] = [];
    }
    this.events[event_name].push(listener);
};

Emitter.prototype.emit = function(event_name) {
    if(this.events[event_name] != undefined) {
        this.events[event_name].forEach(function(listener){
            listener();
        });
        
    }    
};

module.exports = Emitter;