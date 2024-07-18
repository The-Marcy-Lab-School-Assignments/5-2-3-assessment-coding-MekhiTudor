class Phone {
  contacts = [];
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  makeCall(contact) {
    const contactToCall = this.contacts.find(
      (e) => e.name === contact || e.phoneNumber === contact
    );
    if (contactToCall) return `Calling ${contactToCall.name}...`;
    if (contactToCall === undefined && contact.length === 10)
      return `Calling ${contact}...`;
    if (contact.length !== 10) return "Invalid";
  }
  addContact(contact) {
    if (!contact.name || !contact.phoneNumber) return "Invalid";
    if (contact.phoneNumber.length !== 10) return "Invalid";
    this.contacts.push(contact);
    const msg = `${contact.name} added.`;
    return msg;
  }
  removeContact(contact) {
    const contactToRemove = this.contacts.findIndex((e) => e.name === contact);
    if (contactToRemove === -1) return "Contact not found.";
    this.contacts.splice(contactToRemove, 1);
    return `${contact} removed.`;
  }
}

class AppleIPhone extends Phone {
  contacts = [];
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }
  sendIMessage(phone, msg) {
    if (phone instanceof AppleIPhone) {
      return `Message: ${msg} - sent from ${this.model}`;
    } else {
      return `Message could not be sent.`;
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
