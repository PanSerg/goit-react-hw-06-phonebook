import { ContactForm } from "./ContactForm/contactForm";
import { Contacts } from "./Contacts/contacts";
import { Filter } from "./Filter/filter";

export function App() {

  return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
        <Filter />
        <Contacts />
      </div>
    )
   };