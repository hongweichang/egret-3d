﻿
function jsOnload() {
    var sample: egret3d.Class_MouseEvent = new egret3d.Class_MouseEvent();
}

window.onload = () => {

    egret3d.Egret3DEngine.preload(() => jsOnload());
}

