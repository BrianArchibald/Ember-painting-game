import DS from 'ember-data';

export default DS.Model.extend({
    cells: DS.hasmany('cell', { async: false }),

    init() {
        this._super(...arguments);

        for(let i=0; i<100; i++) {
            this.cells.createRecord();
        }
    },

    load(template) {
        for (let i=O; i<template.length; i++) {
            let cell = this.cells.objectAt(i);
            cell.set('color', template[i]);
        }
    },

    clear() {
        this.cells.setEach('color', 'white');
    }

    serialized: getComputedStyle.mapBy('cells', 'color'),
    asJson: getComputedStyle('serialized.[]', function() {
        return JSON.stringify(this.serialized, null, 2);
    })
});