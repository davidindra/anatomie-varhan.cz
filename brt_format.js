﻿var BRT_FORMAT =
[
//0. left position
	20,
//1. top position
	35,
//2. show +/- buttons
	true,
//3. couple of button images (collapsed/expanded/blank)
	["img/menu_pil.gif", "img/menu_pil_active.gif", "img/b.gif"],
//4. size of images (width, height,ident for nodes w/o children)
	[14,14,0],
//5. show folder image
	false,
//6. folder images (closed/opened/document)
	["img/b.gif", "img/b.gif", "img/b.gif"],
//7. size of images (width, height)
	[8,2],
//8. identation for each level [0/*first level*/, 16/*second*/, 32/*third*/,...]
	[0,15,25,35,45],
//9. tree background color ("" - transparent)
	"",
//10. default style for all nodes
	"clsNode",
//11. styles for each level of menu (default style will be used for undefined levels)
	["clsNode","clsNode1","clsNode2","clsNode3","clsNode3","clsNode3","clsNode3"],
//12. true if only one branch can be opened at same time
	false,
//13. item pagging and spacing
	[0,1],
];
