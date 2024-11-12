importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"2a9da758899c4534306bc4b6ce88ab14","url":"feedback.html"},{"revision":"4dc5a64da38cde351c5d7a9fc4e307bb","url":"images/figure1.png"},{"revision":"2f86f2483b4755f9bbc48947c644edab","url":"images/figure2.png"},{"revision":"65ae9a376f7779508ce0a6c6e7753c76","url":"index.html"},{"revision":"da69e5bbc0c4f370ac05d88a4e99cc5a","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a8d3cd2b502a1220a93421559bd18eae","url":"posttest.html"},{"revision":"3b6b587b8efd3dcb0f22e6f3ee4883f3","url":"posttest.json"},{"revision":"a1906e2b3e73663e0a3471bc3ce47925","url":"pretest.html"},{"revision":"054108ab46e41abd3feb05112b19f96f","url":"pretest.json"},{"revision":"d96071d0626fc0b944d2d1188e65bfc9","url":"procedure.html"},{"revision":"49c0fb0e72e90e7bddd0297a357d69c0","url":"references.html"},{"revision":"9faebf9a1359cff7f15ca0bdfecd7042","url":"simulation.html"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis.css"},{"revision":"3075f64e0e6513703e30719e1f0a47e5","url":"simulation/css/analysis1.css"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis12.css"},{"revision":"2d60c87a3b4355081170a63dd5eaabeb","url":"simulation/css/header.css"},{"revision":"5f69b252d1439c21204bc3ca48f97505","url":"simulation/css/header1.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"1a8b019eb829d3a8a81abb1f8716a655","url":"simulation/css/mainPage.css"},{"revision":"ff2f40f98b8f3b789e2bc5aa66bb1f29","url":"simulation/css/psensor.css"},{"revision":"5a2f266004d9412304ad93f9a819d532","url":"simulation/css/style.css"},{"revision":"f09b85650090fe9baf5cbee4e3934010","url":"simulation/images/A_Type1.png"},{"revision":"1d932ea3c59dcdd667b0823d5c65556c","url":"simulation/images/AccelarationFormula.png"},{"revision":"7fc8e7e69443f99b8b927ac4ac7d9634","url":"simulation/images/acceleroMeter.png"},{"revision":"4dc5a64da38cde351c5d7a9fc4e307bb","url":"simulation/images/AccelerometerTypes1.png"},{"revision":"1c60c105d37eea505f0ba351fdddfff2","url":"simulation/images/aTypes.png"},{"revision":"422812d9e43a55fc921f2866dbe70b36","url":"simulation/images/c3.png"},{"revision":"3ff2379d686809b5ec19a76ec141b20f","url":"simulation/images/c9.png"},{"revision":"f2c98ca6eb963e41569dd58e40650380","url":"simulation/images/Cathod.png"},{"revision":"bbe0053a0a3c65606bb5cc95959a7f58","url":"simulation/images/cathodVPreview.png"},{"revision":"18d8b3bac0452e84009aa6fe3c2ce097","url":"simulation/images/COEPlogo.png"},{"revision":"4a08c03116e1f00965f7c8865580c01a","url":"simulation/images/convert.png"},{"revision":"45a048ef625d8c8b5c5fbd373b426328","url":"simulation/images/convertFreq.png"},{"revision":"9c6785ca7796e090be8a6a8d3f724814","url":"simulation/images/f1.png"},{"revision":"da7749162f8c60f47cdb804fca325b04","url":"simulation/images/formula1.png"},{"revision":"e992d04f67925c5e5f2bae8846d1e616","url":"simulation/images/formula2.png"},{"revision":"c8d21f48fa9b33ae32dc4aaf00a02f7a","url":"simulation/images/msgImg.png"},{"revision":"91b59549baad03bf12d1506bb790bc46","url":"simulation/images/msgImg2.png"},{"revision":"c8d21f48fa9b33ae32dc4aaf00a02f7a","url":"simulation/images/msgSTARTbtn.png"},{"revision":"23c62c80f1ba4b670f0e435c17a023bc","url":"simulation/images/naturalFq.png"},{"revision":"2e4324fa5ad64497ef85907a48fc2ffa","url":"simulation/images/piezoelectricA.png"},{"revision":"c5f44ca24adf34fe239b599fe23bf269","url":"simulation/images/reset1Preview.png"},{"revision":"27e52fc7743322d717cfcc2c602071d7","url":"simulation/images/resetBtn123.png"},{"revision":"e6d9cd155bdbe8acd909aed54247f72f","url":"simulation/images/RESETpreview.png"},{"revision":"039c8e89471d62d0c1fb61edbd223c48","url":"simulation/images/shakerImg.png"},{"revision":"146f675a25e39b0f9f662094d610aa7c","url":"simulation/images/startBtn.png"},{"revision":"f68503fa33ae54a1c6d315bc0c698aab","url":"simulation/images/STARTpreview.png"},{"revision":"7d5d4ce9fb7591062b0a8c1cbc30610d","url":"simulation/images/stopBtn.png"},{"revision":"78bdddbc66472dff12dc13f4089e52a5","url":"simulation/images/STOPpreview.png"},{"revision":"ecf8936c9e6d0250b7ee5d366ab09542","url":"simulation/images/type1Accelerometer.png"},{"revision":"94a181042814e877386126929674cdf6","url":"simulation/images/type1Mimic.png"},{"revision":"0db88dd81aacffe2a5cde6b7f08604cd","url":"simulation/images/type2Mimic.png"},{"revision":"6aad2ffc25aaf4f20326411baccaa09c","url":"simulation/images/Untitled.png"},{"revision":"7d19970be29e73dc87d9b14906e9270d","url":"simulation/images/VerticalCathodPreview.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"4f4732d32efdd331f9d50bdceafd6e6a","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"30faa4b93fa9569f0c48e3e8a3e0ba13","url":"simulation/src/analysis.js"},{"revision":"fdf67c3e55164874be52062b1b10e131","url":"simulation/src/graph.js"},{"revision":"906371a574ac5f77e9f1d1e257a5fe4a","url":"simulation/src/mainPage.js"},{"revision":"3a97df8095d453b5df47cb3cb8f0224a","url":"simulation/src/mainPage2.js"},{"revision":"a9c73888ffcf942e85b2dfbbc23feb28","url":"simulation/src/mimic.js"},{"revision":"e741170c7834ae5f49c0a0c0d23aea9f","url":"simulation/src/mimic2.js"},{"revision":"68099d04628cd2dafcb0faa02ea07525","url":"simulation/src/questionJson.js"},{"revision":"c60a114fa4b30fced5a47ffccf300fcb","url":"simulation/src/questions.js"},{"revision":"36d4b0e5141c0e7785b97f0cbf75b35a","url":"simulation/src/table.js"},{"revision":"76ac66f510b5c47bd22578b20d4947c0","url":"simulation/src/timer.js"},{"revision":"39fb11af460ad9fcf3d735e9edf95aec","url":"theory.html"},{"revision":"edec0e97ebeab3a30c4ce3f1a4d88f40","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );