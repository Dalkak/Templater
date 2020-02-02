import {
    Pack, Block, Literal, Type, Dict
} from "dalkak";

export default new Pack({
    name: "Sample",
    blocks: {
        log: new Block({
            name: "log",
            template: "(text) 찍기",
            func: (param, project, platform) => {
                console.log(param.text);
            },
            params: {
                text: Literal.from("안녕")
            }
        })
    }
});