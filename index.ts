import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack({
    name: "templater",
    blocks: {
        init: new Block({
            name: "init",
            template: "Templater 사용하기",
            func: (param, project, platform: any) => {
                var templater = valueField => (object, script) => {
                    var value = script.getField(valueField, script);
                    if(/{.*?}/g.exec(value)[0] == value){
                        return project.variables.value[value.substring(1, value.length-1)].value
                    }else{
                        return value
                            .replace(
                                /{.*?}/g, 
                                val => project.variables.value[val.substring(1, val.length-1)].value
                            );
                    }
                }
                platform.Entry.block.text.func = templater("NAME");
                platform.Entry.block.number.func = templater("NUM");
            }
        })
    }
});