/**
 * Created by vamsavardhanavijay on 4/10/17.
 */
(function(){
    var app=angular.module('gemstore',[]);
    app.controller('StoreController',function(){
        this.product=gem;
    });
    var gem=[{
        name:'Project 1',
        desc:'This project focuses on the following things',
        cost:2.95,
        present:true,
        hiding:false
        },
        {
            name:'Project 2',
            desc:'This is project 2',
            cost:3.50,
            present:true,
            hiding:false
        }];
})();
