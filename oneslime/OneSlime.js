! function() {
    var i, t, e, s, h, l, a, r, n, o, _, p, c, b, m, f, v, X, u, T, y, d, w, Y, g, M, S, k, P, V, x, I, F, R, E, L, C, O, A, J, q, U, G, H, D, B, W, j, N, K, Q, z, Z, $, ii, ti, ei, si, hi, li, ai, ri, ni, oi, _i, pi, ci, bi = 0,
        mi = [0, 0, 0, 0],
        fi = [0, 0, 0, 0],
        vi = !1,
        Xi = 25,
        ui = new Array;

    function Ti() {
        (ni = document.createElement("canvas")).width = i,
        ni.height = t,
        (g = ni.getContext("2d")).font = "15pt sans-serif"
    }

    function yi() {
        switch (
            L = C = 0,
            a = r = 100,
            ei = 8,
            hi = 31,
            V = !1,
            vi || (bi = 0),
            bi
        ) {
            case 0:
                li = new _t,
                V = !1,
                Z = "blue",
                $ = "gray",
                ii = "yellow";
                break;
            case 1:
                li = new ot,
                V = !1,
                Z = "rgb(30,80,0)",
                $ = "darkGray",
                ii = "rgb(128,128,255)";
                break;
            case 2:
                li = new pt,
                V = !1,
                Z = "rgb(98,57,57)",
                $ = "rgb(0,168,0)",
                ii = "white";
                break;
            case 3:
                li = new pt,
                V = !0,
                Z = "black",
                $ = "red",
                ii = "yellow";
                break;
            case 4:
                li = new ct,
                r = 150,
                V = !1,
                Z = "black",
                $ = "red",
                ii = "yellow"
        }
        o = vi ? bi + 1 : n,
        li.init(2)
    }

    function di() {
        var i = document.getElementById("canvas");
        return i.getContext ? i.getContext("2d") : null
    }

    function wi() {
        ! function(i) {
            i.drawImage(ni, 0, 0), ui = new Array
        }(di())
    }

    function Yi(i, t) {
        return i.measureText(t).width
    }

    function gi(i) {
        let t = i.measureText("Xy");
        return t.actualBoundingBoxAscent + t.actualBoundingBoxDescent
    }

    function Mi() {
        let e;
        var s;
        if (e = ni.getContext("2d"),
            e.fillStyle = Z,
            e.fillRect(0, 0, i, 4 * t / 5),
            e.fillStyle = $,
            e.fillRect(0, 4 * t / 5, i, t / 5),
            e.fillStyle = "white",
            e.fillRect(i / 2 - 2, 7 * t / 10, 4, t / 10 + 5),
            ri
        ) {
            g.fillStyle = "white";
            let h = e.font;
            e.font = g.font,
            s = "Slime Volleyball: One Slime",
            e.fillText(s, i / 2 - Yi(g, s) / 2, t / 3 - gi(e)),
            e.font = h,
            e.fillStyle = "white",
            s = "Written by Quin Pendragon and Daniel Wedge",
            e.fillText(s, i / 2 - Yi(e, s) / 2, t / 3 + 2 * gi(e)),
            s = "http://oneslime.net/",
            e.fillText(s, i / 2 - Yi(e, s) / 2, t / 3 + 7 * gi(e) / 2),
            e.fillStyle = "white",
            s = "Click here to start a one player game!",
            mi[0] = i / 4 - Yi(e, s) / 2 - 10, mi[1] = t / 3 + 5 * gi(e),
            mi[2] = mi[0] + Yi(e, s) + 20, mi[3] = mi[1] + 3 * gi(e),
            e.fillRect(i / 4 - Yi(e, s) / 2 - 10, t / 3 + 5 * gi(e), Yi(e, s) + 20, 3 * gi(e)),
            e.fillStyle = Z,
            0 != bi ? (
                e.fillText(s, i / 4 - Yi(e, s) / 2, t / 3 + 13 * gi(e) / 2), s = "or press C to continue...", e.fillText(s, i / 4 - Yi(e, s) / 2, t / 3 + 15 * gi(e) / 2))
                :
                e.fillText(s, i / 4 - Yi(e, s) / 2, t / 3 + 7 * gi(e)),
            e.fillStyle = "white",
            s = "Click here to start a two player game!",
            e.fillRect(3 * i / 4 - Yi(e, s) / 2 - 10, t / 3 + 5 * gi(e), Yi(e, s) + 20, 3 * gi(e)),
            e.fillStyle = Z,
            e.fillText(s, 3 * i / 4 - Yi(e, s) / 2, t / 3 + 7 * gi(e)),
            fi[0] = 3 * i / 4 - Yi(e, s) / 2 - 10,
            fi[1] = t / 3 + 5 * gi(e),
            fi[2] = fi[0] + Yi(e, s) + 20,
            fi[3] = fi[1] + 3 * gi(e),
            ci || (Ui(), Gi())
        } else k || (
            e.fillStyle = "white",
            s = "Your score: " + ai,
            e.fillText(s, i / 2 - Yi(e, s) / 2, t / 2 - gi(e)),
            6 == L && (
                s = "Level bonus: " + ki(1e3 * L / (L + C) * rt()) + " points",
                e.fillText(s, i / 2 - Yi(e, s) / 2, t / 2 + gi(e)),
                s = "Time bonus: " + ki((D < 3e5 ? 3e5 - D : 0) / 1e3 * rt()) + " points",
                e.fillText(s, i / 2 - Yi(e, s) / 2, t / 2 + 2 * gi(e)),
                0 == C && (s = "Flawless Victory: " + 1e3 * rt() + " points", e.fillText(s, i / 2 - Yi(e, s) / 2, t / 2 + 3 * gi(e)))
            ),
            e.font = g.font,
            s = "Level " + (bi + 1) + " clear!",
            e.fillText(s, i / 2 - Yi(e, s) / 2, t / 3),
            s = "Click the mouse to continue...",
            e.fillText(s, i / 2 - Yi(e, s) / 2, 4 * t / 5 + gi(e) + 10)),
            Ui()
    }

    function Si() {
        e = _ = 200,
        s = p = 0,
        h = c = 800,
        l = b = 0,
        m = 0,
        f = 0,
        v = 0,
        X = 0,
        u = w = 200,
        T = Y = 400,
        y = 0,
        d = 0,
        q = !1,
        J = I = F = !1,
        R = E = 0,
        wi(),
        M = "",
        pi = _i = 0,
        ci = !1
    }

    function ki(i) {
        return 0 | i
    }

    function Pi() {
        m = P ? -2 * ti : -ti,
        200 != e || 200 != u || F || J || (J = !0)
    }

    function Vi() {
        m = P ? 2 * ti : ti,
        200 != e || 200 != u || F || J || (J = !0)
    }

    function xi() {
        m = 0
    }

    function Ii() {
        0 == s && (f = P ? ki(45 * si / 31) : si)
    }

    function Fi() {
        v = V ? -2 * ei : -ei,
        800 != h || 800 != u || I || J || (J = !0)
    }

    function Ri() {
        v = V ? 2 * ei : ei,
        800 != h || 800 != u || I || J || (J = !0)
    }

    function Ei() {
        v = 0
    }

    function Li() {
        0 == l && (X = V ? ki(45 * hi / 31) : hi)
    }

    function Ci() {
        ! function() {
            if (vi) {
                var i = [u, T, y, d, e, s, m, f, h, l, v, X];
                li.saveVars(i, P, V), li.moveSlime()
            }
        }(),
        (e += m) < ki(a / 2) && (e = ki(a / 2)),
        e > 495 - ki(a / 2) && (e = 495 - ki(a / 2)),
        0 != f && (s += f -= P ? 4 : 2) < 0 && (s = 0, f = 0),
        (h += v) > 1e3 - ki(r / 2) && (h = 1e3 - ki(r / 2)),
        h < 505 + ki(r / 2) && (h = 505 + ki(r / 2)),
        0 != X && (l += X -= V ? 4 : 2) < 0 && (l = 0, X = 0)
    }

    function Oi(i, t, e, s, h) {
        i.beginPath(), i.ellipse(t + s / 2, e + h / 2, s / 2, h / 2, 0, 0, 2 * Math.PI), i.fill()
    }

    function Ai(i, t, e, s, h) {
        i.beginPath(), i.ellipse(t + s / 2, e + h / 2, s / 2, h / 2, 0, 0, 2 * Math.PI), i.stroke()
    }

    function Ji(i, t, e) {
        i.beginPath(), i.moveTo(t[0], e[0]);
        for (let s = 1; s < t.length; ++s) i.lineTo(t[s], e[s]);
        i.closePath(), i.fill()
    }

    function qi() {
        let m, f = [0, 0, 0, 0];
        m = ni.getContext("2d");
        let v = ki(30 * t / 1e3),
            X = ki(w * i / 1e3),
            y = ki(4 * t / 5) - ki(Y * t / 1e3);
        m.fillStyle = Z, m.fillRect(X - v, y - v, 2 * v, 2 * v);
        let d = X,
            g = y;
        x = !x;
        let M = ki(i * a / 1e3),
            S = ki(t * a / 1e3),
            k = ki(_ * i / 1e3) - ki(M / 2),
            I = ki(4 * t / 5) - S - ki(p * t / 1e3);
        m.fillStyle = Z, m.fillRect(k, I, M, S), f = [k, I, k + M, I + S];
        let F = k,
            R = I;
        M = ki(i * a / 1e3), S = ki(t * a / 1e3), k = ki(e * i / 1e3) - ki(M / 2), I = ki(4 * t / 5) - S - ki(s * t / 1e3), m.fillStyle = P && x ? Color.white : K[n], m.beginPath(), m.arc(k + ki(M / 2), I + S, ki(M / 2), 0, Math.PI, !0), m.fill(), k < f[0] && (f[0] = k), I < f[1] && (f[1] = I), k + M > f[2] && (f[2] = k + M), I + S > f[3] && (f[3] = I + S), ui.push(f);
        let E = ki(e + 38 * a / 100),
            L = ki(s - 60 * a / 100);
        k = ki(E * i / 1e3), I = ki(4 * t / 5) - S - ki(L * t / 1e3);
        let C = ki(k - X),
            O = ki(I - y),
            A = ki(Math.sqrt(C * C + O * O)),
            J = ki(i / 50 * a / 100),
            q = ki(t / 25 * a / 100);
        m.fillStyle = "white", Oi(m, k - J, I - q, J, q), m.fillStyle = "black", Oi(m, k - ki(4 * C / A) - ki(3 * J / 4), I - ki(4 * O / A) - ki(3 * q / 4), ki(J / 2), ki(q / 2)), M = ki(i * r / 1e3), S = ki(t * r / 1e3), k = ki(c * i / 1e3) - ki(M / 2), I = ki(4 * t / 5) - S - ki(b * t / 1e3), m.fillStyle = Z, m.fillRect(k, I, M, S), f = [k, I, k + M, I + S], M = ki(i * r / 1e3), S = ki(t * r / 1e3), k = ki(h * i / 1e3) - ki(M / 2), I = ki(4 * t / 5) - ki(r * t / 1e3) - ki(l * t / 1e3), m.fillStyle = V && x ? "white" : K[o], F = k, R = I, k < f[0] && (f[0] = k), I < f[1] && (f[1] = I), k + M > f[2] && (f[2] = k + M), I + S > f[3] && (f[3] = I + S), ui.push(f), m.beginPath(), m.arc(k + ki(M / 2), I + S, ki(M / 2), 0, Math.PI, !0), m.fill(), E = h - ki(18 * r / 100), L = l - ki(60 * r / 100), k = ki(E * i / 1e3), I = ki(4 * t / 5) - S - ki(L * t / 1e3), C = k - X, O = I - y, A = ki(Math.sqrt(C * C + O * O)), J = ki(i / 50 * r / 100), q = ki(t / 25 * r / 100), m.fillStyle = "white", Oi(m, k - J, I - q, J, q), m.fillStyle = "black", Oi(m, k - ki(4 * C / A) - ki(3 * J / 4), I - ki(4 * O / A) - ki(3 * q / 4), ki(J / 2), ki(q / 2)), P || V || (x = !1), X = ki(u * i / 1e3), y = ki(4 * t / 5) - ki(T * t / 1e3), m.fillStyle = ii, Oi(m, X - v, y - v, 2 * v, 2 * v), f = [0, 0, 0, 0], f[0] = d - v, f[1] = g - v, f[2] = d + v, f[3] = g + v, X - v < f[0] && (f[0] = X - v), y - v < f[1] && (f[1] = y - v), X + v > f[2] && (f[2] = X + v), y + v > f[3] && (f[3] = y + v), ui.push(f)
    }

    function Ui() {
        if (ci) return;
        let e = di();
        e = ni.getContext("2d");
        let s = ki(t / 15);
        e.fillStyle = Z, e.fillRect(0, 0, i, s + 22);
        let h = 20;
        for (let i = 0; i < 6; i++) L >= i + 1 && (e.fillStyle = K[n], Oi(e, h, 30 - s / 2, s, s)), e.strokeStyle = "white", Ai(e, h, 30 - s / 2, s, s), h += s + 10;
        h = i - 20 - 6 * (s + 10);
        for (let i = 0; i < 6; i++) C >= 6 - i && (e.fillStyle = K[o], Oi(e, h, 30 - s / 2, s, s)), e.strokeStyle = "white", Ai(e, h, 30 - s / 2, s, s), h += s + 10
    }

    function Gi() {
        let e;
        e = ni.getContext("2d");
        var s = ki(t / 20);
        e.fillStyle = Z, e.font = g.font;
        let h = (vi ? "Score: " + ai : "") + (k ? "   Time: " + function(i) {
                let t = "",
                    e = (ki(i / 10), ki(i / 1e3) % 60),
                    s = ki(i / 6e4) % 60,
                    h = ki(i / 36e5);
                return h > 0 && (t = h + ":"), t += s + ":", e < 10 && (t += "0"), t += e, t
            }((W ? B : (new Date).getTime()) - H) : ""),
            l = Yi(e, h),
            a = i / 2 - l / 2 - 10;
        e.fillRect(a, 0, l + 20, s + 22), e.fillStyle = "white";
        let r = Yi(e, h),
            n = i / 2 - r / 2,
            o = 2 * gi(e);
        e.fillText(h, n, o), ui.push([n, 0, n + r, o + o / 2])
    }

    function Hi() {
        let e;
        e = ni.getContext("2d"), e.font = g.font, g.fillStyle = $, g.fillRect(0, 4 * t / 5 + 6, i, t / 5 - 10),
            function(e, s) {
                let h = di();
                h = ni.getContext("2d");
                h.font = "15pt sans-serif", h.fillStyle = "white";
                let l = Yi(h, e),
                    a = (i - l) / 2,
                    r = 4 * t / 5 + gi(h) * (s + 1) + 10;
                h.fillText(e, a, r), Ui(), Gi(), ui.push([a, r, a + l + 1, r + gi(h)])
            }(M, 0)
    }

    function Di(i) {
        Di(i, !0)
    }

    function Di(i, t) {
        var a = 0 != i ? i - 1 : oi.length - 1;
        _ = oi[a][0], p = oi[a][1], c = oi[a][2], b = oi[a][3], w = oi[a][4], Y = oi[a][5], e = oi[i][0], s = oi[i][1], h = oi[i][2], l = oi[i][3], u = oi[i][4], T = oi[i][5], y = 0, d = 1, 0 == w && 0 == Y && (w = Y = -500), u == w && T == Y && (w = Y = -500), qi(), di().drawImage(ni, 0, 0)
    }

    function Bi() {
        oi[_i][0] = e, oi[_i][1] = s, oi[_i][2] = h, oi[_i][3] = l, oi[_i][4] = u, oi[_i][5] = T, oi[_i][6] = n, oi[_i][7] = o, ++_i >= oi.length && (_i = 0), pi == _i && pi++, pi >= oi.length && (pi = 0)
    }
    document.addEventListener("mousedown", i => {
        let t = document.getElementById("canvas"),
            e = i.x - t.offsetLeft,
            s = i.y - t.offsetTop;
        if (ri)
            if (e > mi[0] && s > mi[1] && e < mi[2] && s < mi[3]) vi = !0;
            else {
                if (!(e > fi[0] && s > fi[1] && e < fi[2] && s < fi[3])) return;
                vi = !1
            } S = !0, k || (G = !1, k = !0, M = "", 0 != ai && (bi < 5 ? bi++ : bi = 0), ri && (bi = 0, ri = !1, ai = 0), yi(), Si(), wi(), u = 200, U = 1, it())
    }), document.addEventListener("keydown", e => {
        switch (e.key) {
            default:
                break;
            case "K":
            case "k":
                vi && (L = C = 0, P = !1, ai = 0, yi(), Si(), Mi(), wi(), H = (new Date).getTime(), W = !1);
                break;
            case "A":
            case "a":
                Pi();
                break;
            case "D":
            case "d":
                Vi();
                break;
            case "W":
            case "w":
                Ii();
                break;
            case "Left":
            case "ArrowLeft":
                vi ? Pi() : Fi();
                break;
            case "Right":
            case "ArrowRight":
                vi ? Vi() : Ri();
                break;
            case "Up":
            case "ArrowUp":
                vi ? Ii() : Li();
                break;
            case "J":
            case "j":
                vi || Fi();
                break;
            case "L":
            case "l":
                vi || Ri();
                break;
            case "I":
            case "i":
                vi || Li();
                break;
            case "C":
            case "c":
                ri && (G = !1, k = !0, M = "", ri = !1, ai = 0, Si(), yi(), wi(), U = 1, it());
                break;
            case "P":
            case "p":
                W ? (H += (new Date).getTime() - B, W = !1, M = "", Hi(), wi(ni.getContext("2d"))) : (B = (new Date).getTime(), W = !0, M = "Press P to continue . . .", Hi(), wi(ni.getContext("2d")));
                break;
            case "O":
            case "o":
                if (W) H += (new Date).getTime() - B, W = !1;
                else {
                    B = (new Date).getTime();
                    try {
                        this.getAppletContext().showDocument(new URL("http://oneslime.net/boss/launch.html"), "_blank")
                    } catch (i) {
                        console.log(i)
                    }
                    W = !0
                }
                break;
            case " ":
                S = !0;
                break;
            case "+":
                switch (canvas = document.getElementById("canvas"), canvas.width) {
                    case 750:
                        canvas.width = 1e3, canvas.height = 500;
                        break;
                    case 1e3:
                        canvas.width = 1200, canvas.height = 600;
                        break;
                    case 1200:
                        canvas.width = 1500, canvas.height = 750
                }
                i = canvas.width, t = canvas.height, Ti(), Mi(), wi();
                break;
            case "-":
                switch (canvas = document.getElementById("canvas"), canvas.width) {
                    case 1e3:
                        canvas.width = 750, canvas.height = 375;
                        break;
                    case 1200:
                        canvas.width = 1e3, canvas.height = 500;
                        break;
                    case 1500:
                        canvas.width = 1200, canvas.height = 600
                }
                i = canvas.width, t = canvas.height, Ti(), Mi(), wi()
        }
    }), document.addEventListener("keyup", i => {
        switch (i.key) {
            default:
                break;
            case "A":
            case "a":
                m < 0 && xi();
                break;
            case "D":
            case "d":
                m > 0 && xi();
                break;
            case "Left":
            case "ArrowLeft":
                vi && m < 0 ? xi() : !vi && v < 0 && Ei();
                break;
            case "Right":
            case "ArrowRight":
                vi && m > 0 ? xi() : !vi && v > 0 && Ei();
                break;
            case "J":
            case "j":
                v < 0 && Ei();
                break;
            case "L":
            case "l":
                v > 0 && Ei()
        }
    });
    var Wi, ji = 0,
        Ni = !1,
        Ki = !1,
        Qi = 0;
    async function zi(e) {
        if (!(e < tt)) {
            if (S) {
                if (j = Wi, M = "", ci = !1, S = !1, 6 == L || 6 == C) return void st();
                M = "";
                let i = oi[(_i + oi.length - 1) % oi.length][4] >= 500 ? 200 : 800;
                return Si(), w = i, u = i, Mi(), wi(), H += (new Date).getTime() - Qi, tt = e + 16, void requestAnimationFrame(et)
            }
            if (Ki) {
                if (ji > pi) return Mi(), Di(ji % oi.length), g.fillStyle = "white", Ji(g, [20, 35, 35, 50, 50, 35, 35, 20], [30, 20, 30, 20, 40, 30, 40, 30]), di().drawImage(ni, 0, 0), (ji -= 5) < pi && (ji = pi), tt = e + 16, void requestAnimationFrame(zi);
                Ki = !1, Mi()
            }
            return ji == _i ? (g.fillStyle = Z, g.fillRect(0, 0, i, t / 20 + 22), g.fillStyle = "white", g.fillRect(20, 20, 20, 20), di().drawImage(ni, 0, 0), Ni = !Ni, _i < pi && (ji += oi.length), Ki = !0, ji -= 5, tt = e + 1e3, void requestAnimationFrame(zi)) : (Di(ji), ji = (ji + 1) % oi.length, g.fillStyle = "white", Ji(g, [20, 35, 20], [20, 30, 40]), di().drawImage(ni, 0, 0), tt = e + (Ni ? 48 : 16), void requestAnimationFrame(zi))
        }
        requestAnimationFrame(zi)
    }
    var Zi = !1,
        $i = !1;

    function it() {
        _i = pi = 0, Hi(), x = !1, j = 0, R = 0, E = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, O = !1, A = !1, J = !1, Ui(), I = F = !1, q = !1, !1, Zi = !1, $i = !1, ri = !1, H = (new Date).getTime(), Mi(), wi(), et()
    }
    var tt = 0;
    async function et(i) {
        if (ci) zi(0);
        else {
            if (null != U && !ri) {
                if (i < tt) return void requestAnimationFrame(et);
                let t = ni.getContext("2d");
                if (W || (_ = e, p = s, c = h, b = l, w = u, Y = T, Ci(), function() {
                        let i = 15,
                            t = 22;
                        if (T += --d, u += y, !G) {
                            let n = 2 * (u - e),
                                o = T - s,
                                _ = ki(Math.sqrt(n * n + o * o)),
                                p = y - m,
                                c = d - f;
                            if (o > 0 && _ < a + Xi && _ > 5) {
                                let h = ki((n * p + o * c) / _);
                                u = e + ki((a + Xi) / 2 * n / _), T = s + ki((a + Xi) * o / _), h <= 0 && ((y += m - ki(2 * n * h / _)) < -15 && (y = -15), y > i && (y = i), (d += f - ki(2 * o * h / _)) < -22 && (d = -22), d > t && (d = t)), J && (I = !0, R++, E = 0, O = 0 == f && 0 == m, q = !1)
                            }
                            if (n = 2 * (u - h), o = T - l, _ = ki(Math.sqrt(n * n + o * o)), p = y - v, c = d - X, o > 0 && _ < r + Xi && _ > 5) {
                                let e = ki((n * p + o * c) / _);
                                u = h + ki((r + Xi) / 2 * n / _), T = l + ki((r + Xi) * o / _), e <= 0 && ((y += v - ki(2 * n * e / _)) < -15 && (y = -15), y > i && (y = i), (d += X - ki(2 * o * e / _)) < -22 && (d = -22), d > t && (d = t)), J && (F = !0, E++, R = 0, A = 0 == X && 0 == v, q = !1)
                            }
                            u < 15 && (u = 15, y = -y), u > 985 && (u = 985, y = -y), u > 480 && u < 520 && T < 140 && (d < 0 && T > 130 ? (d *= -1, T = 130) : u < 500 ? (u = 480, y = y >= 0 ? -y : y, q = !0) : (u = 520, y = y <= 0 ? -y : y, q = !0))
                        }
                    }(), Ui(), Gi(), qi(), di().drawImage(ni, 0, 0), di().drawImage(ni, 0, 0), ui = new Array, Bi(), t.drawImage(ni, 0, 0)), T < 35) {
                    let i = (new Date).getTime();
                    u > 500 ? L++ : C++, u <= 500 && (R >= 3 || q && R > 0 || !F || O && R > 0) ? (!0) : u > 500 && (E >= 3 || q && E > 0 || !I || A && E > 0) && (!0), I && !F && u >= 500 ? (Zi = !0, ai += ki(200 * rt())) : F && !I && u < 500 ? (Zi = !0) : u > 500 && R > 0 ? ($i = !0, ai += ki(100 * rt())) : u <= 500 && E > 0 && ($i = !0), u > 500 && !$i && !Zi && (ai += ki(50 * rt())), M = vi ? u <= 500 ? N[o] : N[n] : N[n] + (u <= 500 ? "2 " : "1 "), M += 6 == L || 6 == C ? "wins!" : Zi ? "aces the serve!" : $i ? "scores a winner!" : u > 500 && !I && F || u <= 500 && I && !F ? "laughs at his opponent's inability to serve!" : L == C ? "draws level!" : u > 500 && L == C + 1 || u <= 500 && L + 1 == C ? "takes the lead!" : "scores!";
                    let t = u;
                    if (Hi(), Ui(), Gi(), wi(), !1, Zi = !1, $i = !1, S = !1, await new Promise(i => setTimeout(i, 1500)), S) return Bi(), ci = !0, Mi(), gi(ni.getContext("2d")), M = "Press space to continue...", S = !1, Wi = j, j = void 0, ji = pi, Ni = !1, Ki = !1, Qi = (new Date).getTime(), void zi(0);
                    6 != L && 6 != C || st(), M = "", Si(), u = t >= 500 ? 200 : 800, Mi(), wi(), H += (new Date).getTime() - i
                }
                if (null != U) return tt = i + 16, void requestAnimationFrame(et)
            }
            G = !0, k = !1, wi()
        }
    }

    function st() {
        vi ? 6 == L ? (D = (new Date).getTime() - H, 6 == L && (ai += ki(1e3 * L / (L + C) * rt()), ai += ki((D < 3e5 ? 3e5 - D : 0) / 1e3 * rt())), 0 == C && (ai += ki(1e3 * rt())), 4 == bi && (bi = 5, ht(!0))) : ht(!1) : function(e) {
            let s;
            Ui(), Gi(), s = ni.getContext("2d");
            s.fillStyle = $;
            var h = ["C'mon player " + (e ? 1 : 2) + ", I'll take you on!", "Inferior human controlled slime " + (e ? 2 : 1) + " is insipid!", "Inferior human controlled slime " + (e ? 2 : 1) + " is rubbish!", "Super inferior human controlled slime " + (e ? 1 : 2) + " wins!", "You're both yellow cowards. Play me instead!"];
            let l = h[ki(h.length * Math.random())];
            s.fillRect((i - Yi(s, l)) / 2 - 30, t / 2 - 5 * gi(s), Yi(s, l) + 60, 5 * gi(s) + 2 * gi(g)), s.fillStyle = "white", s.fillText(l, (i - Yi(s, l)) / 2, t / 2 - 3 * gi(s)), s.font = g.font, s.fillText("GAME OVER", (i - Yi(g, "GAME OVER")) / 2, t / 2 + gi(g)), wi(), at(3e3, !1), ri = !0
        }(L > C), k = !1, U = null, Mi(), wi()
    }

    function ht(e) {
        let s;
        Ui(), Gi(), s = ni.getContext("2d"), e ? (s.fillStyle = "white", s.font = g.font, s.fillText("YOU WIN!", (i - Yi(g, "YOU WIN!")) / 2, t / 2), s.fillText("The Slimes bow down before the new Slime King!", (i - Yi(s, "The Slimes bow down before the new Slime King!")) / 2, t / 2 + gi(s))) : (s.fillStyle = $, s.fillRect((i - lt(Yi(s, Q[bi]), Yi(s, z[bi]))) / 2 - 30, t / 2 - 5 * gi(s), lt(Yi(s, Q[bi]), Yi(s, z[bi])) + 60, 5 * gi(s) + 2 * gi(s)), s.fillStyle = "white", s.fillText(Q[bi], (i - Yi(s, Q[bi])) / 2, t / 2 - 3 * gi(s)), s.fillText(z[bi], (i - Yi(s, z[bi])) / 2, t / 2 - 2 * gi(s)), s.font = g.font, s.fillText("GAME OVER", (i - Yi(g, "GAME OVER")) / 2, t / 2 + gi(g))), wi(), at(3e3, !1), ri = !0, Mi(), wi()
    }

    function lt(i, t) {
        return i > t ? i : t
    }
    async function at(i, t) {
        if (null != U)
            for (let t = 0; t < i / 20; t++) {
                await new Promise(i => setTimeout(i, 20))
            }
    }

    function rt() {
        return ki(Math.pow(2, bi))
    }
    class nt {
        constructor() {}
        init(i) {
            this.i_player = i, this.LEFT = 0, this.RIGHT = 1, this.JUMP = 2, this.STOP = 3
        }
        saveVars(i, t, e) {
            this.i_ballX = 2 == this.i_player ? i[0] : 1e3 - i[0], this.i_ballY = i[1], this.i_ballVX = 2 == this.i_player ? i[2] : -i[2], this.i_ballVY = i[3], this.i_p1X = 2 == this.i_player ? i[4] : 1e3 - i[8], this.i_p1Y = 2 == this.i_player ? i[5] : i[9], this.i_p1VX = 2 == this.i_player ? i[6] : -i[10], this.i_p1VY = 2 == this.i_player ? i[7] : i[11], this.i_p2X = 2 == this.i_player ? i[8] : 1e3 - i[4], this.i_p2Y = 2 == this.i_player ? i[9] : i[5], this.i_p2VX = 2 == this.i_player ? i[10] : -i[6], this.i_p2VY = 2 == this.i_player ? i[11] : i[7], this.p1Fire = 2 == this.i_player ? t : e, this.p2Fire = 2 == this.i_player ? e : t
        }
        move(i) {
            if (1 == this.i_player) switch (i) {
                case this.LEFT:
                    Vi();
                    break;
                case this.RIGHT:
                    Pi();
                    break;
                case this.JUMP:
                    Ii();
                    break;
                case this.STOP:
                    xi()
            } else if (2 == this.i_player) switch (i) {
                case this.LEFT:
                    Fi();
                    break;
                case this.RIGHT:
                    Ri();
                    break;
                case this.JUMP:
                    Li();
                    break;
                case this.STOP:
                    Ei()
            }
        }
    }
    class ot extends nt {
        constructor() {
            super(), this.i_serveType = -1, this.d_JUMPINESS = .4
        }
        square(i) {
            return i * i
        }
        howManyFrames(i) {
            let t = 0,
                e = this.i_ballY,
                s = this.i_ballVY;
            for (;
                (e += --s) > i;) t++;
            return t
        }
        whereWillBallCross(i) {
            let t = this.howManyFrames(i),
                e = this.i_ballX,
                s = this.i_ballVX;
            for (let i = 0; i < t; i++) e += s, e < 0 ? (e = 0, s = -s) : e > 1e3 && (e = 1e3, s = -s);
            return e
        }
        int(i) {
            return 0 | i
        }
        moveSlime() {
            this.i_ballX < 500 && -1 != this.i_serveType && (this.i_serveType = -1);
            let i, t = this.whereWillBallCross(125);
            this.howManyFrames(125);
            if (i = 0 != this.i_p2Y && this.i_p2X < 575 ? 0 : 23 + ki(15 * Math.random()), 0 == this.i_ballVX && 800 == this.i_ballX || -1 != this.i_serveType) switch (-1 == this.i_serveType && (this.i_p1X > 250 ? this.i_serveType = 0 : this.i_p1X < 200 ? this.i_serveType = 1 : this.i_p1X < 250 && (this.i_serveType = 2), Math.random() < .35 && (this.i_serveType = this.int(3 * Math.random()))), this.i_serveType) {
                    case 0:
                        this.i_ballY < 300 && this.i_ballVY < -3 && (this.move(this.RIGHT), this.move(this.JUMP));
                        break;
                    case 1:
                        this.i_ballY < 300 && this.i_ballVY < 0 && (this.move(this.LEFT), this.move(this.JUMP));
                        break;
                    case 2:
                        let i = 860;
                        this.i_ballVY > 12 && this.i_p2X < i && this.move(this.RIGHT), this.i_p2X >= i && this.move(this.STOP), -3 == this.i_ballVY && 800 != this.i_p2X && this.move(this.JUMP), this.i_ballVY < -12 && 0 != this.i_p2Y && this.i_p2X >= i - 15 && this.move(this.LEFT)
                } else if (t < 500) Math.abs(this.i_p2X - 800) < 20 ? this.move(this.STOP) : this.i_p2X > 800 ? this.move(this.LEFT) : this.i_p2X < 800 && this.move(this.RIGHT);
                else {
                    if (Math.abs(this.i_p2X - t) < i) {
                        if (0 != this.i_p2Y || this.i_p2Fire && Math.random() < .3) return;
                        ((this.i_p2X >= 900 && this.i_ballX > 830 || this.i_p2X <= 580 && this.i_ballX < 530) && Math.abs(u - h) < 100 || 2 * this.square(this.i_ballX - this.i_p2X) + this.square(this.i_ballY - this.i_p2Y) < this.square(170) && this.i_ballX != this.i_p2X || this.i_ballVX * this.i_ballVX + this.i_ballVY * this.i_ballVY < 20 && this.i_ballX - this.i_p2X < 30 && this.i_ballX != this.i_p2X || Math.abs(this.i_ballX - this.i_p2X) < 150 && this.i_ballY > 50 && this.i_ballY < 400 && Math.random() < .5) && this.jump()
                    }
                    if (0 == this.i_p2Y && -1 == this.i_serveType) Math.abs(this.i_p2X - t) < i ? this.move(this.STOP) : t + i < this.i_p2X ? this.move(this.LEFT) : t + i > this.i_p2X && this.move(this.RIGHT);
                    else if (-1 == this.i_serveType) {
                        if (this.i_p2X < 575) return;
                        if (this.i_p2X > 900) return void this.move(this.RIGHT);
                        Math.abs(this.i_p2X - this.i_ballX) < i ? this.move(this.STOP) : this.i_ballX < this.i_p2X ? this.move(this.LEFT) : this.i_ballX > this.i_p2X && this.move(this.RIGHT)
                    }
                }
        }
        jump() {
            Math.random() < this.d_JUMPINESS && this.move(this.JUMP)
        }
    }
    class _t extends nt {
        constructor() {
            super(), this.i_serveType = -1, this.d_JUMPINESS = .85
        }
        square(i) {
            return i * i
        }
        howManyFrames(i) {
            let t = 0,
                e = this.i_ballY,
                s = this.i_ballVY;
            for (;
                (e += --s) > i;) t++;
            return t
        }
        whereWillBallCross(i) {
            let t = this.howManyFrames(i),
                e = this.i_ballX,
                s = this.i_ballVX;
            for (let i = 0; i < t; i++) e += s, e < 0 ? (e = 0, s = -s) : e > 1e3 && (e = 1e3, s = -s);
            return e
        }
        int(i) {
            return 0 | i
        }
        moveSlime() {
            this.i_ballX < 500 && -1 != this.i_serveType && (this.i_serveType = -1);
            let i, t = this.whereWillBallCross(125);
            this.howManyFrames(125);
            if (i = 0 != this.i_p2Y && this.i_p2X < 575 ? 0 : 25 + this.int(10 * Math.random()), 0 == this.i_ballVX && 800 == this.i_ballX || -1 != this.i_serveType) switch (-1 == this.i_serveType && (this.i_p1X > 250 ? this.i_serveType = 0 : this.i_serveType = 1, Math.random() < .35 && (this.serveType = this.int(2 * Math.random()))), this.i_serveType) {
                    case 0:
                        this.i_ballY < 300 && this.i_ballVY < -3 && (this.move(this.RIGHT), this.move(this.JUMP));
                        break;
                    case 1:
                        this.i_ballY < 300 && this.i_ballVY < 0 && (this.move(this.LEFT), this.move(this.JUMP))
                } else if (t < 500) Math.abs(this.i_p2X - 666) < 20 ? this.move(this.STOP) : this.i_p2X > 666 ? this.move(this.LEFT) : this.i_p2X < 666 && this.move(this.RIGHT);
                else {
                    if (Math.abs(this.i_p2X - t) < i) {
                        if (0 != this.i_p2Y || this.i_p2Fire && Math.random() < .3) return;
                        ((this.i_p2X >= 900 && this.i_ballX > 830 || this.i_p2X <= 580 && this.i_ballX < 530) && Math.abs(this.i_ballX - this.i_p2X) < 100 || 2 * this.square(this.i_ballX - this.i_p2X) + this.square(this.i_ballY - this.i_p2Y) < this.square(170) && this.i_ballX != this.i_p2X || this.i_ballVX * this.i_ballVX + this.i_ballVY * this.i_ballVY < 20 && this.i_ballX - this.i_p2X < 30 && this.i_ballX != this.i_p2X || Math.abs(this.i_ballX - this.i_p2X) < 150 && this.i_ballY > 50 && this.i_ballY < 400 && Math.random() < .666) && this.jump()
                    }
                    if (0 == this.i_p2Y && -1 == this.i_serveType) Math.abs(this.i_p2X - t) < i ? this.move(this.STOP) : t + i < this.i_p2X ? this.move(this.LEFT) : t + i > this.i_p2X && this.move(this.RIGHT);
                    else if (-1 == this.i_serveType) {
                        if (this.i_p2X < 575) return;
                        if (this.i_p2X > 900) return void this.move(this.RIGHT);
                        Math.abs(this.i_p2X - this.i_ballX) < i ? this.move(this.STOP) : this.i_ballX < this.i_p2X ? this.move(this.LEFT) : this.i_ballX > this.i_p2X && this.move(this.RIGHT)
                    }
                }
        }
        jump() {
            Math.random() < this.d_JUMPINESS && this.move(this.JUMP)
        }
    }
    class pt extends nt {
        constructor() {
            super(), this.i_serveType = -1
        }
        moveSlime() {
            if (-1 != this.i_serveType || 800 == this.i_ballX && 0 == this.i_ballVX) return void this.serve();
            let i, t = this.xAtY(this.i_p2Y + this.i_p2VY + 30);
            i = t < 600 ? 0 : t < 700 ? 10 : 20, t < 450 ? Math.abs(this.i_p2X - 666) < 10 ? this.move(this.STOP) : 666 < this.i_p2X ? this.move(this.LEFT) : 666 > this.i_p2X && this.move(this.RIGHT) : Math.abs(this.i_p2X - t - i) < 10 ? this.move(this.STOP) : t + i < this.i_p2X ? this.move(this.LEFT) : t + i > this.i_p2X && this.move(this.RIGHT), this.i_p2X > 900 && Math.random() < .4 || t < 620 || this.i_ballY < 130 && this.i_ballVY < 0 || this.p2Fire && Math.random() < .6 || ((this.i_p2X >= 900 && this.i_ballX > 830 || this.i_p2X <= 580 && this.i_ballX < 530) && Math.abs(this.i_ballX - this.i_p2X) < 100 || 2 * this.square(this.i_ballX - this.i_p2X) + this.square(this.i_ballY - this.i_p2Y) < this.square(185) && this.i_ballX != this.i_p2X || this.i_ballVX * this.i_ballVX + this.i_ballVY * this.i_ballVY < 20 && this.i_ballX - this.i_p2X < 30 && this.i_ballX != this.i_p2X || Math.abs(this.i_ballX - this.i_p2X) < (this.p2Fire ? 135 : 150) && this.i_ballY > 50 && this.i_ballY < 250) && this.move(this.JUMP)
        }
        square(i) {
            return i * i
        }
        framesTillY(i) {
            let t = 0,
                e = this.i_ballY,
                s = this.i_ballVY;
            for (;
                (e += --s) > 0;) t++;
            return t
        }
        xAtY(i) {
            let t = this.i_ballX,
                e = this.i_ballY,
                s = this.i_ballX,
                h = this.i_ballVY;
            for (;
                (e += --h) > i;) t += y, t <= 0 ? (t = 0, s = -y) : t >= 1e3 && (t = 1e3, s = -y);
            return t
        }
        int(i) {
            return 0 | i
        }
        ballDist() {
            let i = this.i_p2X - this.i_ballX,
                t = this.i_p2Y - this.i_ballY;
            return this.int(Math.sqrt(i * i + t * t))
        }
        serve() {
            let i, t;
            switch (-1 == this.i_serveType && (Math.random() < .3 ? this.i_p1X < 300 && !this.p2Fire ? this.i_serveType = 0 : this.i_p1X > 200 ? this.i_serveType = 1 : this.i_serveType = 2 : this.i_serveType = 2, (-1 == this.i_serveType || Math.random() < .3) && (this.i_serveType = this.int(3 * Math.random())), this.p2Fire && 0 == this.i_serveType && (this.i_serveType = 1 + this.int(2 * Math.random()))), this.i_serveType) {
                case 0:
                case 1:
                    t = 0 == this.i_serveType ? 860 : 840, this.i_ballVY > 12 && this.i_p2X < t && this.move(this.RIGHT), this.i_p2X >= t && this.move(this.STOP), -3 == this.i_ballVY && 800 != this.i_p2X && this.move(this.JUMP), this.i_ballVY < -12 && 0 != this.i_p2Y && this.i_p2X >= t - 15 && 0 == this.i_serveType && this.move(this.LEFT), this.i_ballX < 700 && (this.i_serveType = -1);
                    break;
                case 2:
                    i = 770, this.i_ballVY > 12 && this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), -2 == this.i_ballVY && 800 != this.i_p2X && this.move(this.JUMP), 0 != this.i_p2Y && this.i_ballX > 800 && (this.i_serveType = 3 + this.fakeJump());
                    break;
                case 3:
                    i = this.p2Fire ? 555 : 585, this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), this.i_ballX <= (this.p2Fire ? 740 : 730) && this.move(this.JUMP), this.i_ballX < 540 && (this.i_serveType = -1);
                    break;
                case 4:
                    i = this.p2Fire ? 555 : 585, this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), this.i_ballX <= (this.p2Fire ? 700 : 730) && this.move(this.JUMP), this.i_ballX < 600 && this.move(this.RIGHT), this.i_ballX < 580 && this.move(this.STOP), this.i_ballX < 540 && (this.i_serveType = -1)
            }
        }
        fakeJump() {
            let i = !1;
            return i = this.i_p1X < 200 ? Math.random() < .7 : this.i_p1X > 300 ? Math.random() < .3 : Math.random() < .5, i ? 1 : 0
        }
    }
    class ct extends nt {
        constructor() {
            super(), this.i_serveType = -1
        }
        moveSlime() {
            if (-1 != this.i_serveType || 800 == this.i_ballX && 0 == this.i_ballVX) return void this.serve();
            let i, t = this.xAtY(this.i_p2Y + this.i_p2VY + 30);
            i = t < 600 ? 0 : t < 700 ? 10 : 20, t < 450 ? Math.abs(this.i_p2X - 666) < 10 ? this.move(this.STOP) : 666 < this.i_p2X ? this.move(this.LEFT) : 666 > this.i_p2X && this.move(this.RIGHT) : Math.abs(this.i_p2X - t - i) < 10 ? this.move(this.STOP) : t + i < this.i_p2X ? this.move(this.LEFT) : t + i > this.i_p2X && this.move(this.RIGHT), this.i_p2X > 900 && Math.random() < .4 || t < 720 || this.i_ballY < 150 && this.i_ballVY > -3 || ((this.i_p2X >= 900 && this.i_ballX > 830 || this.i_p2X <= 580 && this.i_ballX < 530) && Math.abs(this.i_ballX - this.i_p2X) < 100 || 2 * this.square(this.i_ballX - this.i_p2X) + this.square(this.i_ballY - this.i_p2Y) < this.square(185) && this.i_ballX != this.i_p2X || this.i_ballVX * this.i_ballVX + this.i_ballVY * this.i_ballVY < 20 && this.i_ballX - this.i_p2X < 30 && this.i_ballX != this.i_p2X || Math.abs(this.i_ballX - this.i_p2X) < 150 && this.i_ballY > 50 && this.i_ballY < 250) && this.move(this.JUMP)
        }
        square(i) {
            return i * i
        }
        framesTillY(i) {
            let t = 0,
                e = this.i_ballY,
                s = this.i_ballVY;
            for (;
                (e += --s) > 0;) t++;
            return t
        }
        xAtY(i) {
            let t = this.i_ballX,
                e = this.i_ballY,
                s = this.i_ballVX,
                h = this.i_ballVY;
            for (;
                (e += --h) > i;) t += s, t <= 0 ? (t = 0, s = -s) : t >= 1e3 && (t = 1e3, s = -s);
            return t
        }
        int(i) {
            return 0 | i
        }
        ballDist() {
            let i = this.i_p2X - this.i_ballX,
                t = this.i_p2Y - this.i_ballY;
            return this.int(Math.sqrt(i * i + t * t))
        }
        serve() {
            let i, t;
            switch (-1 == this.i_serveType && (Math.random() < .3 ? this.i_p1X < 300 ? this.i_serveType = 0 : this.i_p1X > 200 ? this.i_serveType = 1 : this.i_serveType = 2 : this.i_serveType = 2, (-1 == this.i_serveType || Math.random() < .3) && (this.i_serveType = this.int(3 * Math.random()))), this.i_serveType) {
                case 0:
                case 1:
                    t = 0 == this.i_serveType ? 860 : 840, this.i_ballVY > 12 && this.i_p2X < t && this.move(this.RIGHT), this.i_p2X >= t && this.move(this.STOP), -3 == this.i_ballVY && 800 != this.i_p2X && this.move(this.JUMP), this.i_ballVY < -12 && 0 != this.i_p2Y && this.i_p2X >= t - 15 && 0 == this.i_serveType && this.move(this.LEFT), this.i_ballX < 700 && (this.i_serveType = -1);
                    break;
                case 2:
                    i = 770, this.i_ballVY > 12 && this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), -2 == this.i_ballVY && 800 != this.i_p2X && this.move(this.JUMP), 0 != this.i_p2Y && this.i_ballX > 800 && (this.i_serveType = 3 + this.fakeJump());
                    break;
                case 3:
                    i = 585, this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), this.i_ballX <= 730 && this.move(this.JUMP), this.i_ballX < 600 && this.move(this.RIGHT), this.i_ballX < 580 && this.move(this.STOP), this.i_ballX < 540 && (this.i_serveType = -1);
                case 4:
                    i = 585, this.i_p2X > i && this.move(this.LEFT), this.i_p2X <= i && this.move(this.STOP), this.i_ballX <= 755 && this.move(this.JUMP), this.i_ballX < 600 && this.move(this.RIGHT), this.i_ballX < 580 && this.move(this.STOP), this.i_ballX < 540 && (this.i_serveType = -1)
            }
        }
        fakeJump() {
            let i = 0;
            return this.i_p1X < 200 ? i = 1 : this.i_p1X > 300 && (i = 0), Math.random() < .35 && (i = 1 - i), i
        }
    }
    window.onload = function() {
        ! function() {
            let e = 1,
                s = "oneslime.net";
            for (let i = Math.max(0, s.length - 12); i < s.length; ++i) e += (s.charCodeAt(i) << 2) - 411;
            new ot, new _t, new pt, new ct;
            let h = document.getElementById("canvas");
            i = h.width * e, t = h.height * e, k = G = !1, M = "Click the mouse to play!", Ti(), k = G = !1, M = "Click the mouse to play!", K = ["yellow", "white", "red", "black", "blue", "blue"], Q = ["You are a loser!", (N = ["Inferior Human Controlled Slime ", "The Pathetic White Slime ", "Angry Red Slimons ", "The Slime Master ", "Psycho Slime ", "The Big Blue Boss "])[2] + "gives you the gong!", N[3] + 'says "You are seriously inept."', N[4] + "laughs at the pathetic slow opposition.", N[5] + "devours you!"], z = ["Better luck next time.", "So who has the red face bombing out on level 2, huh?", "Congrats on reaching level 3.", "Congrats on reaching level 4!", "Yum."], n = 0, ti = 8, si = 31 * e, a = 100 * e, ai = 0, ri = !0, W = !1, yi(), Si(), ui = new Array, Mi(), wi(), oi = new Array;
            for (let i = 0; i < 1e3; ++i) oi.push([0, 0, 0, 0, 0, 0, 0, 0])
        }()
    }
}();
