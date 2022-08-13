module.exports = function(RED) {
    function ControlNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            node.send(msg);
            if (msg.payload == "ON") {
                node.status({fill:"green",shape:"dot",text: config.identifier + " enabled"});
                node.context().flow.set("easy-disable-" + config.identifier, true);
            } else {
                node.status({fill:"red",shape:"dot",text: config.identifier + " disabled"});
                node.context().flow.set("easy-disable-" + config.identifier, false);
            }
        });
    }
    RED.nodes.registerType("control",ControlNode);
}

