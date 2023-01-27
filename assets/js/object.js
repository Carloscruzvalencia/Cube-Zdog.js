let rubikCubes = new Zdog.Anchor({
    addTo: rubik

});

ps = 10
for (i = 0; i != 4; i++) {
    let box = new Zdog.Box({
        addTo: rubikCubes,
        width: 120,
        height: 120,
        depth: 130,
        stroke: false,
        color: '#C25',
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: {
            x: i * 125,
            y: 10
        }
    });
    for (j = 0; j != 3; j++) {
        box.copy({
            addTo: rubikCubes,
            translate: {
                y: ps += 125,
                x: i * 125,
                z: 0
            },
        });
    }
    ps = 10
}
for (i =0 ;i != 4;i++){
    rubikCubes.copyGraph({
        translate: {
            x: 0,
            z: i * -135
        },
    })
}

function animate() {
    rubik.updateRenderGraph();
    requestAnimationFrame(animate);
}
animate();