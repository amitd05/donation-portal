import React, { useState, useEffect } from 'react';
import './App.css';
import Uniform from './school.jpg';
import stationary from './stationary.jpg';
import footware from './footware.jpg';
import gadgets from './gadgets.jpg';
import donation from './donation.jpg';
import mission1 from './mission 1.jpg';
import mission2 from './mission 2.jpg';
import mission3 from './mission 3.jpg';
import mission4 from './mission 4.jpg';
import facebook from './facebook.jpg';
import insta from './insta.jpg';
import twitter from './twitter.jpg';
import linkedin from './linkedin.png';

function Header() {
    return (
        <header>
            <div className="container">
                <div className='head'>
                   DonorConnect
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#donation">Donations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#mission-id">Missions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#register">Register NGO</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

function HomeSection() {
    return (
        <section className="home-sec" id="home">
            <div className="container">
                <div className="home-content">
                    <div className="row">
                        <div className="col-lg-6 align-item-center">
                            <div className="home-info">
                                <h1>Together we can create meaningful change</h1>
                                <h2>We connect <span>donors</span> directly with <span>recipients</span> in need</h2>
                                <p>Make a difference today: reach out, share, and help improve lives through direct giving.</p>
                               
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-last">
                            <div className="img-sec">
                                <img src={donation} alt="home-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function DonationSection({ ngoRequests, onDelete }) {
    const [deleteToken, setDeleteToken] = useState('');
    const [selectedRequestId, setSelectedRequestId] = useState(null);

    const handleDeleteTokenChange = (e) => {
        setDeleteToken(e.target.value);
    };

    const handleDelete = () => {
        if (!deleteToken) {
            alert('Please enter delete token');
            return;
        }
        if (!selectedRequestId) {
            alert('Please select a request to delete');
            return;
        }

        // Call the onDelete function with the selected request ID and delete token
        onDelete(selectedRequestId, deleteToken);

        // Clear selected request and delete token after deletion
        setSelectedRequestId(null);
        setDeleteToken('');
    };

    return (
        <section className="don-sec" id="donation">
            <div className="container">
                <div className="heading">
                    <h2>NGO Requests</h2>
                </div>
                <div className="row">
                    {ngoRequests.map((request) => (
                        <div className="col-lg-4" key={request.id}>
                            <div className="don-box">
                                <img src={request.image} alt="img" />
                                <h3>{request.item}</h3>
                                <p>{request.ngoName} is requesting this item.</p>
                                <div className='btn-container'>
                                <button className="btn1 " onClick={() => setSelectedRequestId(request.id)}>Delete</button>
                                <a className="btn1 " href="#contact">Donate</a>
                                </div>
                            </div>
                            {selectedRequestId==request.id && (
                    <div className='token-container'>
                        <input type="text" value={deleteToken} onChange={handleDeleteTokenChange} placeholder="Enter delete token" />
                        <button onClick={handleDelete}>Delete Request</button>
                    </div>
                )}
                        </div>
                    ))}
                    
                </div>
               
                
            </div>
        </section>
    );
}





function MissionSection() {
    return (
        <section className="mission" id="mission-id">
            <div className="container">
                <div className="heading">
                    <h2>Our Missions</h2>
                    <p>We have delivered <span>Wastage</span> or <span>Donations</span> to needy Peoples</p>
                </div>
                <div className="gallery-sec">
                    <div className="container">
                        <div className="image-container">
                            <div className="image"><img src={mission1} alt="img" /></div>
                            <div className="image"><img src={mission2} alt="img" /></div>
                            <div className="image"><img src={mission3} alt="img" /></div>
                            <div className="image"><img src={mission4} alt="img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="about-sec" id="about">
    <div className="container">
        <div className="row">
            <div className="col-12 heading text-center mb-4">
                <h2>About Us</h2>
                <p>What We Do & Why We Do</p>
            </div>
            <div className="col-lg-8 mx-auto">
                <p>
                    At <span>DonorConnect</span>, we believe that kindness creates the greatest impact 
                            when it is direct and personal. Our platform is designed to connect donors with individuals 
                            and families in need, making it easier to provide support without unnecessary barriers.
                </p>
                <p>
              We do not collect or distribute funds. Instead, we share recipient details with donors, 
                            enabling direct communication and transparent giving. This way, every contribution reaches 
                            the right person and creates a meaningful difference.
                </p>
                 <p>
                                Our mission is simple: to build a community where generosity flows freely, connections are 
                            genuine, and every act of giving helps improve lives.
                </p>
            </div>
        </div>
    </div>
</section>

    );
}



function ContactSection({ ngoRequests }) {
    const [formState, setFormState] = useState({
        ngoEmail:'',
        name: '',
        mobile: '',
        address: '',
        message: '',
        selectedRequest: ''
    });

    const [errors, setErrors] = useState({});
    const [notificationSent, setNotificationSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'selectedRequest') {
            const selectedRequest = ngoRequests.find(request => request.item === value);
            if (selectedRequest) {
                setFormState(prevState => ({
                    ...prevState,
                    selectedRequest: value,
                    ngoEmail: selectedRequest.email // Update ngoEmail based on selected request
                }));
            }
        } else {
            setFormState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formState.name) newErrors.name = 'Your Name is required';
        if (!formState.mobile) {
            newErrors.mobile = 'Mobile No. is required';
        } else if (!/^\d{10}$/.test(formState.mobile)) {
            newErrors.mobile = 'Mobile No. is invalid';
        }
        if (!formState.address) newErrors.address = 'Address is required';
        if (!formState.selectedRequest) newErrors.selectedRequest = 'You must choose an NGO request';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formState);
            // Send notification to NGO
            const selectedRequest = ngoRequests.find(request => request.item === formState.selectedRequest);
            if (selectedRequest) {
                const notificationData = {
                    ngoEmail: selectedRequest.email,
                    ngoName: selectedRequest.ngoName,
                    itemName: selectedRequest.item,
                    donorName: formState.name,
                    donorMobile: formState.mobile,
                    donorAddress: formState.address,
                    message: formState.message
                };
                sendNotification(notificationData);
                setNotificationSent(true);
            }
        }
    };

    const sendNotification = (data) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/notify-ngo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('Notification sent successfully.');
            } else {
                console.error('Failed to send notification.');
            }
        })
        .catch(error => console.error('Error sending notification:', error));
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="heading">
                    <h2>Connect With Us</h2>
                    <p>Fill this form, our team will connect your <span>Donation</span> or <span>Wastage</span> with the right NGO.</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            value={formState.name} 
                                            onChange={handleChange} 
                                        />
                                        {errors.name && <div className="error">{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="mobile" 
                                            placeholder="Mobile No." 
                                            value={formState.mobile} 
                                            onChange={handleChange} 
                                        />
                                        {errors.mobile && <div className="error">{errors.mobile}</div>}
                                    </div>
                                    <div className="form-group">
                                        <select 
                                            name="selectedRequest" 
                                            className="form-control" 
                                            value={formState.selectedRequest} 
                                            onChange={handleChange}
                                        >
                                            <option value="">Choose an NGO Request</option>
                                            {ngoRequests.map((request, index) => (
                                                <option key={index} value={request.item}>
                                                    {request.ngoName} - {request.item}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.selectedRequest && <div className="error">{errors.selectedRequest}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="address" 
                                            placeholder="Address" 
                                            value={formState.address} 
                                            onChange={handleChange} 
                                        />
                                        {errors.address && <div className="error">{errors.address}</div>}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="message" 
                                            cols="90" 
                                            rows="1" 
                                            placeholder="Message" 
                                            value={formState.message} 
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    {notificationSent ? (
                                        <p>Notification sent to NGO successfully!</p>
                                    ) : (
                                        <button type="submit" className="btn1 mt-5">Submit Details</button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}









function RegisterNGOSection({ addNGORequest }) {
    const [formState, setFormState] = useState({
        ngoName: '',
        contactPerson: '',
        email: '',
        address: '',
        phone: '',
        description: '',
        item: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image" && files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormState(prevState => ({
                    ...prevState,
                    image: reader.result // Base64 string
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formState.ngoName) newErrors.ngoName = 'NGO Name is required';
        if (!formState.contactPerson) newErrors.contactPerson = 'Contact Person is required';
        if (!formState.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formState.address) newErrors.address = 'Address is required';
        if (!formState.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formState.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formState.description) newErrors.description = 'Description is required';
        if (!formState.item) newErrors.item = 'Item requested is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addNGORequest(formState);
            setFormState({
                ngoName: '',
                contactPerson: '',
                email: '',
                address: '',
                phone: '',
                description: '',
                item: '',
                image: ''
            });
            setErrors({});
        }
    };

    return (
        <section className="register-section" id="register">
            <div className="container">
                <div className="heading">
                    <h2>Register Your NGO</h2>
                    <p>Join our mission to help those in need. Register your NGO with us.</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="ngoName" placeholder="NGO Name" value={formState.ngoName} onChange={handleChange} />
                                        {errors.ngoName && <div className="error">{errors.ngoName}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="contactPerson" placeholder="Contact Person" value={formState.contactPerson} onChange={handleChange} />
                                        {errors.contactPerson && <div className="error">{errors.contactPerson}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
                                        {errors.email && <div className="error">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address" placeholder="Address" value={formState.address} onChange={handleChange} />
                                        {errors.address && <div className="error">{errors.address}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formState.phone} onChange={handleChange} />
                                        {errors.phone && <div className="error">{errors.phone}</div>}
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="description" placeholder="Description" value={formState.description} onChange={handleChange}></textarea>
                                        {errors.description && <div className="error">{errors.description}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="item" placeholder="Item Requested" value={formState.item} onChange={handleChange} />
                                        {errors.item && <div className="error">{errors.item}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control" name="image" accept="image/*" onChange={handleChange} />
                                        {errors.image && <div className="error">{errors.image}</div>}
                                    </div>
                                    
                                </div>
                                <div className="col-md-12 mt-3">
                                    <button type="submit" className="btn1 mt-5">Register Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}







function UpdateNGOSection({ ngoRequests, updateNGORequest }) {
    const [selectedNGO, setSelectedNGO] = useState(null);
    const [formState, setFormState] = useState({
        ngoName: '',
        contactPerson: '',
        email: '',
        address: '',
        phone: '',
        description: '',
        item: '',
        image: '',
        token: '' // Add token field
    });

    const handleNGOChange = (e) => {
        const ngoId = e.target.value;
        const ngo = ngoRequests.find(request => request.id === parseInt(ngoId));
        setSelectedNGO(ngo);
        setFormState({
            ngoName: ngo.ngoName,
            contactPerson: ngo.contactPerson || '',
            email: ngo.email,
            address: ngo.address || '',
            phone: ngo.phone || '',
            description: ngo.description || '',
            item: ngo.item,
            image: ngo.image,
            token: '' // Reset token field when selecting a new NGO
        });
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNGORequest(selectedNGO.id, formState);
        setSelectedNGO(null);
        setFormState({
            ngoName: '',
            contactPerson: '',
            email: '',
            address: '',
            phone: '',
            description: '',
            item: '',
            image: '',
            token: ''
        });
    };

    return (
        <section className="update-section" id="update">
            <div className="container">
                <div className="heading">
                    <h2>Update NGO Details</h2>
                    <p>Select an NGO to update its details.</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <form className="update-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <select className="form-control" onChange={handleNGOChange}>
                                            <option value="">Select NGO</option>
                                            {ngoRequests.map((request) => (
                                                <option key={request.id} value={request.id}>{request.ngoName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="ngoName" placeholder="NGO Name" value={formState.ngoName} onChange={handleChange} disabled />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="contactPerson" placeholder="Contact Person" value={formState.contactPerson} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address" placeholder="Address" value={formState.address} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formState.phone} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="description" cols="90" rows="1" placeholder="Description" value={formState.description} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="item" placeholder="Item Requested" value={formState.item} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="image" placeholder="Image URL" value={formState.image} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="token" placeholder="Enter Token" value={formState.token} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <button type="submit" className="btn1 mt-5">Update NGO</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}





function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h4>About Us</h4>
                            <p><span>DonorConnect</span> is a simple platform that connects donors directly with recipients. 
                                We don’t act as a middleman or handle funds—instead, we share recipient details with donors, 
                                enabling direct communication and transparent giving.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#donation">Donations</a></li>
                                <li><a href="#mission-id">Missions</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#register">Register NGO</a></li>
                            </ul>
                        </div>
                    </div>
                   <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget">
                            <h4>Get Involved</h4>
                            <p>Join our mission to connect kindness with need. You can register your NGO, become a donor, or share our platform with others to spread awareness.</p>
                            <div className="col-md-12 mt-3">  
            <a href="#register" className="btn1 mt-4">Get Started</a>
        </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="mb-0">
                            © {new Date().getFullYear()} DonorConnect. All rights reserved.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const [ngoRequests, setNGORequests] = useState([]);

    const addNGORequest = (request) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/requests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(response => response.json())
        .then(data => {
            setNGORequests([...ngoRequests, data]);
        })
        .catch(error => console.error('Error adding NGO request:', error));
    };
    const updateNGORequest = (id, updatedRequest) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/requests/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRequest)
        })
        .then(response => response.json())
        .then(data => {
            setNGORequests(ngoRequests.map(request => request.id === id ? data : request));
        })
        .catch(error => console.error('Error updating NGO request:', error));
    };
    const deleteNGORequest = (id, token) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/${id}?token=${token}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setNGORequests(ngoRequests.filter(request => request.id !== id));
            } else {
                console.error('Error deleting NGO request');
            }
        })
        .catch(error => console.error('Error deleting NGO request:', error));
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/requests`)
            .then(response => response.json())
            .then(data => setNGORequests(data))
            .catch(error => console.error('Error fetching NGO requests:', error));
    }, []);

    return (
        <div>
            <Header />
            <HomeSection />
            <DonationSection ngoRequests={ngoRequests} onDelete={deleteNGORequest} />
            <MissionSection />
            <AboutSection />
            <ContactSection ngoRequests={ngoRequests} />
            <RegisterNGOSection addNGORequest={addNGORequest} />
            <UpdateNGOSection ngoRequests={ngoRequests} updateNGORequest={updateNGORequest} />
            <Footer />
        </div>
    );
}


export default App;
