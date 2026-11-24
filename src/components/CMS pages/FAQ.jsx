import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import FooterCopyRight from '../FooterCopyRight';

const FAQ_DATA = [
  {
    id: 1,
    category: 'Bookings & Reservations',
    question: 'How do I make a reservation for a Maldives guesthouse?',
    answer:
      'You can book your room directly on CheapRoomMV by selecting your destination atoll, check-in and check-out dates, and room type. Once you complete the booking, an instant confirmation voucher along with island arrival guidelines will be sent to your email.'
  },
  {
    id: 2,
    category: 'Payment & Cancellation',
    question: 'Can I modify or cancel my booking?',
    answer:
      'Yes, modifications and cancellations depend on the specific guesthouse rate plan. Many of our partner guesthouses offer Free Cancellation up to 48–72 hours prior to check-in. You can check the cancellation policy on your voucher or reach out to our 24/7 concierge for assistance.'
  },
  {
    id: 3,
    category: 'Payment & Cancellation',
    question: 'What payment methods are accepted on CheapRoomMV?',
    answer:
      'We accept major international credit/debit cards (Visa, MasterCard, American Express), bank transfers, and secure online payment gateways. Some partner guesthouses also offer "Pay at Hotel" options during arrival in Maldivian Rufiyaa (MVR) or USD.'
  },
  {
    id: 4,
    category: 'Transfers & Speedboats',
    question: 'How do island speedboat and domestic transfers work?',
    answer:
      'Scheduled public speedboats, private speedboats, and domestic seaplane flights connect Velana International Airport (Malé) to local inhabited islands. When you book a guesthouse on CheapRoomMV, our team coordinates your transfer schedule directly with your island host to ensure smooth pickup upon flight arrival.'
  },
  {
    id: 5,
    category: 'Stay & Local Island Policies',
    question: 'Is breakfast included in the room rate?',
    answer:
      'Most guesthouses on CheapRoomMV include daily tropical breakfast (featuring fresh continental breakfast or traditional Maldivian Mas Huni with Roshi). Look for the "Breakfast Included" badge on the room card during booking.'
  },
  {
    id: 6,
    category: 'Stay & Local Island Policies',
    question: 'What are the standard check-in and check-out times?',
    answer:
      'Standard check-in begins at 2:00 PM and check-out is by 12:00 PM. Early check-in or late check-out is subject to room availability on the island and can be requested through your host or our support team in advance.'
  },
  {
    id: 7,
    category: 'Stay & Local Island Policies',
    question: 'What is the dress code and local culture on inhabited islands?',
    answer:
      'The Maldives is an Islamic nation with warm, welcoming island communities. On inhabited local islands, modest dress (covering shoulders and knees) is appreciated when walking through island villages. Every tourist-friendly island features designated private "Bikini Beaches" where swimwear is completely welcome.'
  },
  {
    id: 8,
    category: 'Stay & Local Island Policies',
    question: 'Is high-speed Wi-Fi available on the local islands?',
    answer:
      'Yes, all verified guesthouses on CheapRoomMV provide complimentary high-speed Wi-Fi in rooms and common lounge areas. Additionally, local 4G/5G SIM cards (Dhiraagu and Ooredoo) are available at Velana Airport upon landing.'
  },
  {
    id: 9,
    category: 'Bookings & Reservations',
    question: 'Are there hidden fees, Green Tax, or service charges?',
    answer:
      'No hidden fees! All taxes — including the mandatory Maldives Green Tax ($3/person/night on local island guesthouses), Tourism Goods & Service Tax (TGST), and service charges — are clearly itemized before you confirm your reservation.'
  },
  {
    id: 10,
    category: 'Transfers & Speedboats',
    question: 'What happens if my international flight lands late in the evening?',
    answer:
      'Scheduled public speedboats usually depart Malé between 7:00 AM and 4:30 PM depending on the atoll. If your flight lands late, you can stay one transit night in Hulhumalé or Malé City, or arrange an exclusive private speedboat charter to your island destination.'
  },
  {
    id: 11,
    category: 'Bookings & Reservations',
    question: 'Can I book diving trips, sandbank excursions, and water sports?',
    answer:
      'Absolutely! Our verified guesthouses organize manta ray snorkeling, whale shark excursions, resort day visits, and PADI scuba diving tours at significantly lower prices than luxury private island resorts.'
  },
  {
    id: 12,
    category: 'Payment & Cancellation',
    question: 'Do you offer group booking discounts or long-term stays?',
    answer:
      'Yes, we offer special rates for families, dive groups, digital nomads, and travelers staying 7 nights or longer. Please contact our support team directly to request custom group pricing.'
  }
];

const CATEGORIES = [
  'All Questions',
  'Bookings & Reservations',
  'Transfers & Speedboats',
  'Payment & Cancellation',
  'Stay & Local Island Policies'
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All Questions' || faq.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="cms-page-wrapper">
      <Header />

      {/* Compact Image Breadcrumbs Section */}
      <section className="breadcrumbs-main-info-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="breadcrumbs-main-content">
                <h2>Frequently Asked Questions</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-angle-right" />
                  </li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Main Content Section */}
      <section className="cms-section-area">
        <div className="container">
          {/* Section Heading */}
          <div className="cms-heading-block">
            <span className="cms-badge-pill">
              <i className="fa-solid fa-circle-question" /> HELP &amp; SUPPORT
            </span>
            <h2>Your Maldives Travel Questions Answered</h2>
            <p>
              Find clear, straightforward answers about booking authentic island guesthouses,
              organizing speedboats, and navigating local Maldives regulations.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="faq-filter-controls-wrap">
            {/* Search Input */}
            <div className="faq-search-box">
              <i className="fa-solid fa-magnifying-glass search-icon" />
              <input
                type="text"
                placeholder="Search your question (e.g. speedboat, cancellation, breakfast, Wi-Fi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="faq-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="faq-category-pills">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`faq-category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="faq-accordion-container">
            {filteredFaqs.length === 0 ? (
              <div className="text-center p-5 bg-white rounded-3 border">
                <i className="fa-solid fa-magnifying-glass text-muted fs-1 mb-3" />
                <h4 className="fw-bold">No matching questions found</h4>
                <p className="text-muted">
                  Try searching with different keywords or reset your category filter.
                </p>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-teal mt-2"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Questions');
                  }}
                  style={{ color: '#F29E4C', borderColor: '#F29E4C' }}
                >
                  View All Questions
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div className="faq-modern-card" key={faq.id}>
                    <button
                      type="button"
                      className={`faq-card-header ${isOpen ? 'open' : ''}`}
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-question-title">
                        <span className="faq-q-badge">Q</span>
                        <span>{faq.question}</span>
                      </div>
                      <i className="fa-solid fa-chevron-down faq-chevron" />
                    </button>
                    {isOpen && <div className="faq-card-body">{faq.answer}</div>}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions Box */}
          <div className="faq-still-help-box">
            <div className="faq-help-text">
              <h3>Still Have Questions About Maldives?</h3>
              <p>
                Can't find the answer you need? Our on-island concierge team in Malé is here to assist 24/7.
              </p>
            </div>
            <div className="faq-help-buttons">
              <a
                href="https://wa.me/9607791234"
                target="_blank"
                rel="noopener noreferrer"
                className="faq-btn-whatsapp"
              >
                <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
              </a>
              <Link to="/contact-us" className="faq-btn-contact">
                <i className="fa-solid fa-envelope" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FooterCopyRight />
    </div>
  );
};

export default FAQ;
