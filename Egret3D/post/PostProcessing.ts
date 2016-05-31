﻿module egret3d {
    export class PostProcessing {

        public postItem: IPost[];
        public posTex: any;
        public endTexture: ITexture;
        constructor() {
            this.postItem = []; 
        }

        public drawFrameBuffer(time: number, delay: number, context3D: Context3DProxy, collect: CollectBase, camera: Camera3D, backViewPort: Rectangle = null ) {
            for (var i: number = 0; i < this.postItem.length; i++){
                this.postItem[i].drawTexture(time, delay, context3D, collect, camera, backViewPort, this.posTex);
                this.endTexture = this.posTex["end"];
            }
        }
    }
}