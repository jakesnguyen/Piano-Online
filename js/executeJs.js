document.addEventListener("keyup", function(e) {
    if (e.shiftKey == true) {
        switch (e.keyCode) {

            case 49: // 1 
                keys1up();
                break;

            case 50: // 2
                keys2up();
                break;


            case 52: // 4
                keys4up();
                break;

            case 53: // 5
                keys5up();
                break;

            case 54: // 6
                keys6up();
                break;


            case 56: // 8
                keys8up();
                break;
            case 57: // 9
                keys9up();
                break;


            case 81: // q
                keysqup();
                break;

            case 87: // w
                keyswup();
                break;

            case 69: // e
                keyseup();
                break;


            case 84: // t
                keystup();
                break;

            case 89: // y
                keysyup();
                break;



            case 73: // i
                keysiup();
                break;

            case 79: // o
                keysoup();
                break;

            case 80: // p
                keyspup();
                break;


            case 83: // s
                keyssup();
                break;

            case 68: // d
                keysdup();
                break;


            case 71: // g
                keysgup();
                break;

            case 72: //h
                keyshup();
                break;

            case 74: // j
                keysjup();
                break;



            case 76: // l
                keyslup();
                break;

            case 90: // z
                keyszup();
                break;


            case 67: //c
                keyscup();
                break;

            case 86: //v
                keysvup();
                break;

            case 66: //b
                keysbup();
                break;

        }
    }
    if (e.shiftKey != true) {
        switch (e.keyCode) {

            case 49: // 1 
                key1up();
                break;

            case 50: // 2
                key2up();
                break;
            case 51: // 3
                key3up();
                break;

            case 52: // 4
                key4up();
                break;

            case 53: // 5
                key5up();
                break;

            case 54: // 6
                key6up();
                break;

            case 55: // 7
                key7up();
                break;

            case 56: // 8
                key8up();
                break;
            case 57: // 9
                key9up();
                break;

            case 48: // 0
                key0up();
                break;

            case 81: // q
                keyqup();
                break;

            case 87: // w
                keywup();
                break;

            case 69: // e
                keyeup();
                break;

            case 82: // r
                keyrup();
                break;

            case 84: // t
                keytup();
                break;

            case 89: // y
                keyyup();
                break;

            case 85: // u
                keyuup();
                break;

            case 73: // i
                keyiup();
                break;

            case 79: // o
                keyoup();
                break;

            case 80: // p
                keypup();
                break;

            case 65: // a
                keyaup();
                break;
            case 83: // s
                keysup();
                break;

            case 68: // d
                keydup();
                break;

            case 70: //f
                keyfup();
                break;
            case 71: // g
                keygup();
                break;

            case 72: //h
                keyhup();
                break;

            case 74: // j
                keyjup();
                break;

            case 75: // k
                keykup();
                break;

            case 76: // l
                keylup();
                break;

            case 90: // z
                keyzup();
                break;

            case 88: //x
                keyxup();
                break;

            case 67: //c
                keycup();
                break;

            case 86: //v
                keyvup();
                break;

            case 66: //b
                keybup();
                break;

            case 78: //n
                keynup();
                break;

            case 77: //m
                keymup();
                break;
        }
    }

});

document.addEventListener("keydown", function(e) {

    if (e.shiftKey == true) {
        switch (e.keyCode) {
            case 49: // 1 
                keys1();
                break;
            case 50: // 2
                keys2();
                break;
            case 52: // 4
                keys4();
                break;
            case 53: // 5
                keys5();
                break;
            case 54: // 6
                keys6();
                break;
            case 56: // 8
                keys8();
                break;
            case 57: // 9
                keys9();
                break;

            case 81: // q
                keysq();
                break;
            case 87: // w
                keysw();
                break;
            case 69: // e
                keyse();
                break;

            case 84: // t
                keyst();
                break;
            case 89: // y
                keysy();
                break;

            case 73: // i
                keysi();
                break;
            case 79: // o
                keyso();
                break;
            case 80: // p
                keysp();
                break;

            case 83: // s
                keyss()
                break;
            case 68: // d
                keysd()
                break;

            case 71: // g
                keysg();
                break;
            case 72: //h
                keysh();
                break;
            case 74: // j
                keysj();
                break;

            case 76: // l
                keysl()
                break;
            case 90: // z
                keysz()
                break;

            case 67: //c
                keysc()
                break;
            case 86: //v
                keysv()
                break;
            case 66: //b
                keysb()
                break;

        }
    }
    if (e.shiftKey != true) {
        switch (e.keyCode) {
            case 49: // 1 
                key1();
                break;
            case 50: // 2
                key2();
                break;
            case 51: // 3
                key3();
                break;
            case 52: // 4
                key4();
                break;
            case 53: // 5
                key5();
                break;
            case 54: // 6
                key6();
                break;
            case 55: // 7
                key7();
                break;
            case 56: // 8
                key8();
                break;
            case 57: // 9
                key9();
                break;
            case 48: // 0
                key0();
                break;
            case 81: // q
                keyq();
                break;
            case 87: // w
                keyw();
                break;
            case 69: // e
                keye();
                break;
            case 82: // r
                keyr();
                break;
            case 84: // t
                keyt();
                break;
            case 89: // y
                keyy();
                break;
            case 85: // u
                keyu();
                break;
            case 73: // i
                keyi();
                break;
            case 79: // o
                keyo();
                break;
            case 80: // p
                keyp();
                break;
            case 65: // a
                keya();
                break;
            case 83: // s
                keys()
                break;
            case 68: // d
                keyd()
                break;
            case 70: //f
                keyf()
                break;
            case 71: // g
                keyg();
                break;
            case 72: //h
                keyh();
                break;
            case 74: // j
                keyj();
                break;
            case 75: // k
                keyk();
                break;
            case 76: // l
                keyl()
                break;
            case 90: // z
                keyz()
                break;
            case 88: //x
                keyx()
                break;
            case 67: //c
                keyc()
                break;
            case 86: //v
                keyv()
                break;
            case 66: //b
                keyb()
                break;
            case 78: //n
                keyn()
                break;
            case 77: //m
                keym()
                break;
        }
    }


});