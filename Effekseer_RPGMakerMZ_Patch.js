/*
 * --------------------------------------------------
 * Effekseer_RPGMakerMZ_Patch Ver.1.0.1
 * This software is released under the CC0 1.0 Universal.
 * https://creativecommons.org/publicdomain/zero/1.0/deed.en
 * --------------------------------------------------
 */

/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/Effekseer-sample-for-RPG-Tkool-MZ/master/Effekseer_RPGMakerMZ_Patch.js
 * @plugindesc v1.0.1 パーティクル数が過多で、正常に表示できないエフェクトを表示可能にします。
 * @author Effekseer
 *
 * @help
 * RPGツクールMV v1.0.1 で
 * パーティクル数が過多で、正常に表示できないエフェクトを表示可能にします。
 *
 * 注意
 * 　このプラグインが反映するのは「戦闘テスト」「戦闘シーン」のみです。
 * 　データベース操作での、エフェクトの選択時のプレビューや
 * 　アニメーションの「再生」には反映されません。
 *
 * プラグインコマンドはありません。
 *
 * 利用規約
 * 　クリエイティブ・コモンズ CC0です。
 * 　https://creativecommons.org/publicdomain/zero/1.0/deed.ja
 */

(() => {
    'use strict'

    Graphics._createEffekseerContext = function () {
        if (this._app && window.effekseer) {
            try {
                this._effekseer = effekseer.createContext();
                if (this._effekseer) {
                    this._effekseer.init(this._app.renderer.gl, { instanceMaxCount: 10000, squareMaxCount: 10000 });
                }
            } catch (e) {
                this._app = null;
            }
        }
    };
})()
