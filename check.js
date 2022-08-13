module.exports = function(RED) {
    function CheckNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            if (node.context().flow.get("easy-disable-" + config.identifier) == true) {
                node.status({fill:"green",shape:"dot",text: config.identifier + " enabled"});
                node.send(msg);
            } else {
                node.status({fill:"red",shape:"dot",text: config.identifier + " disabled"});
            }
        });
    }
    RED.nodes.registerType("check",CheckNode);
}

