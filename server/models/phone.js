const phonesData = require('../data');

class Phone {
    constructor(data) {
        this.id = data.id;
        this.brand = data.brand;
        this.color = data.color;
        this.price = data.price;

   }

   static get all() {
    const phone = phonesData.map((phone) => new Phone(phone));
    return phone;
}

static create(phone) {
    const newPhoneId = phonesData.length + 1;
    const newPhone = new Phone({ id: newPhoneId, ...phone });
    phonesData.push(newPhone);
    return newPhone;
}

static findById(id) {
    try {
        const phoneData = phonesData.filter((phone) => phone.id === id)[0];
        const phone = new Phone(phoneData);
        return phone;
    } catch (err) {
        throw new Error('That phone does not exist!');
    }
}

static findByBrand(brand) {
    try {
        const phoneData = phonesData.filter((phone) => phone.brand === brand)[0];
        const phone = new Phone(phoneData);
        return phone;
    } catch (err) {
        throw new Error('That phone does not exist!');
    }
}


destroy() {
    const phone = phonesData.filter((phone) => phone.id === this.id)[0];
    phonesData.splice(phonesData.indexOf(phone), 1);
}




}

module.exports = Phone;