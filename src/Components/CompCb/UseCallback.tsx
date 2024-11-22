/*
 * It's used to memorize an instance of a function and to prevent a child component don't render
*/

import { memo, useCallback, useState } from "react";

interface Contact {
    id: number;
    name: string;
    phone: string;
}

interface ContactProps {
    contact: Contact;
    onCall: (name: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.debug(`Redering contact ${contact.name}`);
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Phone: {contact.phone}</p>
            <button type="button" onClick={() => onCall(contact.name)}>Call</button>
        </div>
    )
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: "Pepe", phone: "+573009842857" },
        { id: 2, name: "Maria", phone: "+573119684657" },
        { id: 3, name: "Carlos", phone: "+573150981234" }
    ]);

    const [log, setLog] = useState<string>("");

    const makeCall = useCallback((name: string) => setLog(`Calling to ${name}`), []);

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Contact N${contacts.length + 1}`,
            phone: `+57316${(Math.random() * 1e7).toFixed(0)}`
        }
        setContacts([...contacts, newContact]);
    }

    return (
        <div>
            <h2>Contacts List</h2>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
            ))}
            <button type="button" onClick={addContact}>Add Contact</button>
            <p>{log}</p>
        </div>
    )
}
