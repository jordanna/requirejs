define(['a'], function (a) {
    doh.register(
        "dataMainRequireConfig",
        [
            function dataMainRequireConfig(t){
                t.is("a", a.name);
            }
        ]
    );
    doh.run();
});
