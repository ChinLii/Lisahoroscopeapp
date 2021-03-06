import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ActionSheetController, App } from 'ionic-angular';
import { SocialSharing, GoogleAnalytics } from 'ionic-native';
import { HomePage } from '../home/home';
import { BrowsePage } from '../browse/browse';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { Http } from '@angular/http';
export var TabsPage = (function () {
    function TabsPage(navCtrl, params, app, alertCtrl, http, loadingCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.tab1Root = HomePage;
        this.tab2Root = BrowsePage;
        this.tab4Root = ProfilePage;
        this.tabIndex = 0;
        this.data = params.get('data');
    }
    TabsPage.prototype.share = function () {
        var _this = this;
        if (this.data.type == 'guest') {
            var alert = this.alertCtrl.create({
                title: "This feature is required to login first.",
                subTitle: "Do you want to login? ",
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.app.getRootNav().setRoot(LoginPage);
                        }
                    },
                    {
                        text: 'No',
                        handler: function () {
                            console.log('Not thing');
                        }
                    }
                ]
            });
            alert.present();
        }
        else {
            var alert = this.alertCtrl.create();
            alert.setTitle('Choose horoscope sign');
            alert.addInput({
                type: 'radio',
                label: 'Aries',
                value: 'aries',
                checked: true
            });
            alert.addInput({
                type: 'radio',
                label: 'Taurus',
                value: 'taurus'
            });
            alert.addInput({
                type: 'radio',
                label: 'Gemini',
                value: 'gemini'
            });
            alert.addInput({
                type: 'radio',
                label: 'Cancer',
                value: 'cancer'
            });
            alert.addInput({
                type: 'radio',
                label: 'Leo',
                value: 'leo'
            });
            alert.addInput({
                type: 'radio',
                label: 'Virgo',
                value: 'virgo'
            });
            alert.addInput({
                type: 'radio',
                label: 'Libra',
                value: 'libra'
            });
            alert.addInput({
                type: 'radio',
                label: 'Scorpio',
                value: 'scorpio'
            });
            alert.addInput({
                type: 'radio',
                label: 'Sagittarius',
                value: 'sagittarius'
            });
            alert.addInput({
                type: 'radio',
                label: 'Capricorn',
                value: 'capricorn'
            });
            alert.addInput({
                type: 'radio',
                label: 'Aquarius',
                value: 'aquarius'
            });
            alert.addInput({
                type: 'radio',
                label: 'Pisces',
                value: 'pisces'
            });
            alert.addButton('Cancel');
            alert.addButton({
                text: 'Share',
                handler: function (data) {
                    //do something
                    //sharing on facebook
                    var actionSheet = _this.actionSheetCtrl.create({
                        title: 'Sharing',
                        buttons: [
                            {
                                text: 'Share via Facebook',
                                handler: function () {
                                    GoogleAnalytics.trackEvent("User", "Share via Facebook");
                                    console.log('Share on facebook');
                                    SocialSharing.shareViaFacebook("My horoscope result", 'https://lisaguru.com/horoscope/' + data, 'https://lisaguru.com/horoscope/' + data).then(function () {
                                        var confirm = _this.alertCtrl.create({
                                            title: 'Share completed',
                                            subTitle: 'You have successfully shared this on Facebook',
                                            buttons: ['OK']
                                        });
                                        confirm.present();
                                    }).catch(function () {
                                        console.log("cancel share with facebook");
                                        /*let confirm = this.alertCtrl.create({
                                          title: 'Share failed',
                                          subTitle: 'Bad connection error. Please try again.',
                                          buttons: ['OK']
                                        });
                                        confirm.present();*/
                                    });
                                }
                            },
                            {
                                text: "Share via Twitter",
                                handler: function () {
                                    console.log('Share on Twitter');
                                    GoogleAnalytics.trackEvent("User", "Share via Twitter");
                                    SocialSharing.shareViaTwitter("My horoscope result", 'https://lisaguru.com/horoscope/horoscope/' + data, 'https://lisaguru.com/horoscope/horoscope/' + data).then(function () {
                                        var confirm = _this.alertCtrl.create({
                                            title: 'Share completed',
                                            subTitle: 'You have successfully shared this on twitter',
                                            buttons: ['OK']
                                        });
                                        confirm.present();
                                    }).catch(function () {
                                        console.log("cancel share with twitter");
                                        /*let confirm = this.alertCtrl.create({
                                          title: 'Share failed',
                                          subTitle: 'Bad connection error. Please try again.',
                                          buttons: ['OK']
                                        });
                                        confirm.present(); */
                                    });
                                }
                            },
                            {
                                text: "Cancel",
                                role: "cancel",
                                handler: function () {
                                    console.log("Cancel");
                                }
                            }
                        ]
                    });
                    actionSheet.present();
                }
            });
            alert.present();
        }
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: App, },
        { type: AlertController, },
        { type: Http, },
        { type: LoadingController, },
        { type: ActionSheetController, },
    ];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map