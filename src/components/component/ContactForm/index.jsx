<form name="contact" method="POST" data-netlify="true" hidden>
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
</form>

import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });
            setFormState({ name: '', email: '', message: '' });
            setSuccessMessage(true);
        } catch (error) {
            alert('Error: ' + error);
        }
    };

    return (
        <Element className="py-12 md:py-24 text-customGray bg-customWhite" name="contact">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-roboto">Get in Touch</h2>
                <div>
                    <div>
                        <p className="font-sans">
                            Have a project in mind or want to learn more about our services? Fill out the form below and one of
                            our consultants will be in touch with you shortly.
                        </p>
                        <form
                            id="contact-form"
                            className="mt-6 space-y-4 font-sans"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>
                                    Don’t fill this out if you’re human: <input name="bot-field" />
                                </label>
                            </p>
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    type="text"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can we help you?"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button className="w-1/4" variant="destructive">
                                Submit
                            </Button>
                            {successMessage && (
                                <p className="text-green-500 mt-4">Thank you! Your submission has been received.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default ContactForm;