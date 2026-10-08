import { useEffect, useRef } from 'react';
import { Send, X } from 'lucide-react';

const inputClassName =
    'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15';

export default function BookingPage({ isOpen, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previousFocus = document.activeElement;
        const focusFrame = requestAnimationFrame(() => {
            dialogRef.current?.querySelector('input')?.focus();
        });

        return () => {
            cancelAnimationFrame(focusFrame);
            if (previousFocus instanceof HTMLElement) previousFocus.focus();
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const message = [
            'Hello Hydrotechsolution, I would like to book an inspection.',
            `Name: ${formData.get('firstName')} ${formData.get('lastName')}`,
            `Email: ${formData.get('email')}`,
            `Phone: ${formData.get('phone')}`,
            `City: ${formData.get('city')}`,
            `Leakage issue: ${formData.get('description')}`,
        ].join('\n');

        window.open(
            `https://wa.me/919666587727?text=${encodeURIComponent(message)}`,
            '_blank',
            'noopener,noreferrer',
        );
        onClose();
    };

    const handleDialogKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
            return;
        }

        if (event.key !== 'Tab') return;

        const focusableElements = dialogRef.current?.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/45 px-4 py-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
            onKeyDown={handleDialogKeyDown}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-dialog-title"
                aria-describedby="booking-dialog-description"
                className="relative max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-xl border border-slate-200 border-t-4 border-t-blue-600 bg-white p-4 text-left shadow-2xl sm:p-6"
            >
                <div className="relative">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                        aria-label="Close booking form"
                    >
                        <X size={20} aria-hidden="true" />
                    </button>

                    <h2 id="booking-dialog-title" className="pr-10 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                        Book a Scan Now
                    </h2>
                    <p id="booking-dialog-description" className="mt-2 max-w-sm text-sm leading-5 text-slate-600">
                        Leakage and waterproofing site visits are carried out by verified civil engineers who understand building structure and moisture behavior.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                    <div className="grid grid-cols-2 gap-2.5">
                        <label className="sr-only" htmlFor="booking-first-name">First name</label>
                            <input
                                className={inputClassName}
                                type="text"
                                id="booking-first-name"
                                name="firstName"
                                autoComplete="given-name"
                                placeholder="First Name*"
                                required
                                minLength={2}
                                maxLength={60}
                            />

                        <label className="sr-only" htmlFor="booking-last-name">Last name</label>
                            <input
                                className={inputClassName}
                                type="text"
                                id="booking-last-name"
                                name="lastName"
                                autoComplete="family-name"
                                placeholder="Last Name*"
                                required
                                minLength={2}
                                maxLength={60}
                            />
                    </div>

                    <label className="sr-only" htmlFor="booking-email">Email address</label>
                        <input
                            className={inputClassName}
                            type="email"
                            id="booking-email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email Address*"
                            required
                            maxLength={120}
                        />

                    <label className="sr-only" htmlFor="booking-phone">Phone number</label>
                        <input
                            className={inputClassName}
                            type="tel"
                            id="booking-phone"
                            name="phone"
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="Phone Number*"
                            required
                            pattern="[+0-9() -]{7,20}"
                            title="Enter a valid phone number"
                        />

                    <label className="sr-only" htmlFor="booking-city">City</label>
                        <select className={inputClassName} id="booking-city" name="city" defaultValue="" required>
                            <option value="" disabled>Choose your city</option>
                            <option>Hyderabad</option>
                            <option>Secunderabad</option>
                            <option>Vijayawada</option>
                            <option>Bengaluru</option>
                            <option>Chennai</option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                            <option>Other</option>
                        </select>

                    <label className="sr-only" htmlFor="booking-description">Describe the problem</label>
                        <textarea
                            className={`${inputClassName} min-h-12 resize-y`}
                            id="booking-description"
                            name="description"
                            placeholder="Describe the problem you are facing.*"
                            required
                            minLength={10}
                            maxLength={1000}
                        />

                    <button
                        type="submit"
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                    >
                        Request a Booking
                        <Send size={16} aria-hidden="true" />
                    </button>
                    </form>
                </div>
            </div>
        </div>
    );
}