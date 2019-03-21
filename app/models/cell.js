import DS from 'ember-data';

export default DS.model.extend({
    color: DS.attr('string', { defaultValue: 'white' })
});