document.addEventListener('DOMContentLoaded', function () {

    // --- PROVIDED DATA ARRAY ---
    const data = [
        {
            "section": "Login Page",
            "heading": "Username & Password Validation:",
            "text": "• The login form accepts incorrect or blank credentials without displaying appropriate error messages.<br> • Implement validation to ensure username and password fields are not empty and meet security standards.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0030.jpg"
        },
        {
            "section": "Branch Dashboard",
            "heading": "Branch Dashboard:",
            "text": "• This feature is working properly without any issues.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0029.jpg"
        },
        {
            "section": "Other Bank",
            "heading": "Other Bank:",
            "text": "• This feature is functioning correctly and does not require modifications.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0028.jpg"
        },
        {
            "section": "Deposit",
            "heading": "Deposits:",
            "text": "• Unable to check the payment gateway because new data cannot be added.<br> • No data is available for verification. Fix the data entry issue.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0027.jpg",
            "heading1": "Payment Gateway:",
            "text1": "• This feature is working correctly.",
            "img1": "./images/ANDi Banking1 (29)-merged_page-0024.jpg",
        },
        {
            "section": "Latest News",
            "heading": "Add New:",
            "text": "• The 'Add New' page is not working.",
            "img0": "./images/500.png",
            "heading1": "View All:",
            "text1": "• The 'View All' page is not working.",
            "img1": "./images/500.png",
        },
        {
            "section": "Transaction",
            "heading": "Bank Transaction Request:",
            "text": "• No data available. Ensure transactions are recorded correctly.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0023.jpg",
            "heading1": "Bank Transaction Approved:",
            "text1": "• No data available. Validate the approval process and database updates.",
            "img1": "./images/ANDi Banking1 (29)-merged_page-0022.jpg",
            "heading2": "Bank Transaction Rejected:",
            "text2": "• No data available. Ensure rejected transactions are logged properly.",
            "img2": "./images/ANDi Banking1 (29)-merged_page-0021.jpg"
        },
        {
            "section": "Withdraw",
            "heading": "Withdraw Request:",
            "text": "• No data available. Fix data entry and retrieval issues.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0020.jpg",
            "heading1": "Approved Withdraw:",
            "text1": "• Page is not available. Implement or debug the functionality.",
            "img1": "./images/500.png",
            "heading2": "Rejected Withdraw:",
            "text2": "• No data available. Ensure rejected withdrawal records are stored properly.",
            "img2": "./images/ANDi Banking1 (29)-merged_page-0021.jpg", // Note: Same img as Transaction Rejected in data
            "heading3": "Withdraw Method:",
            "text3": "• Data is correctly added and functioning properly.",
            "img3": "./images/ANDi Banking1 (29)-merged_page-0019.jpg",
        },
        {
            "section": "User Management",
            "heading": "All Users:",
            "text": "• No user data available.<br> • Ensure user verification processes function properly.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0017.jpg",

            "heading1": "Verified Users:",
            "text1": "• No user data available.<br> • Ensure verification works correctly.",
            "img1": "./images/ANDi Banking1 (29)-merged_page-0017.jpg",

            "heading2": "Banned Users:",
            "text2": "• No user data available.<br> • Verify that banned users are correctly stored and displayed.",
            "img2": "./images/ANDi Banking1 (29)-merged_page-0017.jpg",

            "heading3": "Mobile Unverified Users:",
            "text3": "• No data available. Ensure mobile verification is functional.",
            "img3": "./images/ANDi Banking1 (29)-merged_page-0017.jpg",

            "heading4": "Email:",
            "text4": "• No data available.<br> • Debug email verification and storage mechanisms.",
            "img4": "./images/ANDi Banking1 (29)-merged_page-0017.jpg",
        },
        {
            "section": "Settings",
            "heading": "General settings:",
            "text": "• All the available data is working properly and has no error when correct data is provided",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0016.jpg",

            "heading1": "Charge settings",
            "text1": "All the available data is working properly and has no error when correct data is provided",
            "img1": "./images/ANDi Banking1 (29)-merged_page-0015.jpg",

            "heading2": "Email settings:",
            "text2": "i am now sure what to check no this page",
            "img2": "./images/ANDi Banking1 (29)-merged_page-0014.jpg",

            "heading3": "Sms Api settings:",
            "text3": "All the input are working properly and data is save and update properly.",
            "img3": "./images/ANDi Banking1 (29)-merged_page-0013.jpg",

            "heading4": "FacebookApi: ",
            "text4": "All the input are working properly and data is save and update properly",
            "img4": "./images/ANDi Banking1 (29)-merged_page-0012.jpg",
        },
        {
            "section": "Interface Control",
            "heading": "Home Page",
            "text": "Home page is working properly",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0010.jpg",

            "heading1": "Logo & Favicon",
            "text1": "All the available data is working properly",
            "img1": "./images/ANDi Banking1 (29)-merged_page-0009.jpg",

            "heading2": "Social Icon:",
            "text2": "All the data is working properly.",
            "img2": "./images/ANDi Banking1 (29)-merged_page-0008.jpg",

            "heading3": "Contract Information:",
            "text3": "All the data is working properly.",
            "img3": "./images/ANDi Banking1 (29)-merged_page-0007.jpg",

            "heading4": "Charge breadcrumb: ",
            "text4": "All the data is working properly.",
            "img4": "./images/ANDi Banking1 (29)-merged_page-0006.jpg",

            "heading5": "Faq: ",
            "text5": "this option is working properly and has no error.",
            "img5": "./images/ANDi Banking1 (29)-merged_page-0005.jpg",

            "heading6": "Sliders: ",
            "text6": "this option is working properly and has no error.",
            "img6": "./images/ANDi Banking1 (29)-merged_page-0004.jpg",

            "heading7": "Services: ",
            "text7": "this option is working properly and has no error.",
            "img7": "./images/ANDi Banking1 (29)-merged_page-0003.jpg",
        },
        {
            "section": "Newsletter",
            "heading": "Newsletter:",
            "text": "• Functional but contains no data to check.<br> • Test sending/receiving newsletters.",
            "img0": "./images/new.png"
        },
        {
            "section": "Advertisement",
            "heading": "Advertisement:",
            "text": "• Script and banner advertisements are working properly.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0002.jpg"
        },
        {
            "section": "Language Manager",
            "heading": "Language Manager:",
            "text": "• Works properly with valid data.<br> • Ensure incorrect inputs are rejected.",
            "img0": "./images/ANDi Banking1 (29)-merged_page-0001.jpg"

        },
        {
            "section": "Errors & Issues",
            "heading": "Bank Name:",
            "text": "• Allows special characters, which causes errors.<br> • Implement proper validation.",
            "heading1": "Website Performance:",
            "text1": "• Running very slowly.<br> • Optimize backend queries, improve caching, and use a CDN.",
            "heading2": "SMS API Settings:",
            "text2": "• Error prevents API verification.<br> • Implement real-time validation.",
            "heading3": "Logo & Favicon:",
            "text3": "• Updates appear successful but do not reflect changes.<br> • Ensure proper processing.",
            "heading4": "Scrolling Issue:",
            "text4": "• No scrollbar, making navigation difficult.<br> • Enable scrollbars.",
            "heading5": "Newsletter Page:",
            "text5": "• Unable to send newsletters.<br> • Debug backend processes.",
            "heading6": "Language Settings:",
            "text6": "• Language code should not accept numeric values.<br> • Implement proper validation.",
        }
    ];


    // --- Slider Functionality (Keep Existing) ---
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        // ... (your existing slider code here - make sure it's inside the DOMContentLoaded) ...
        const slides = sliderContainer.querySelectorAll('.slide');
        const nextBtn = sliderContainer.querySelector('.next');
        const prevBtn = sliderContainer.querySelector('.prev');
        let currentSlide = 0;
        let slideInterval;
        const slideDuration = 5000;

        function showSlide(index) {
            if (slides.length === 0) return;
            if (index >= slides.length) index = 0;
            else if (index < 0) index = slides.length - 1;
            slides.forEach((slide) => slide.classList.remove('active'));
            slides[index].classList.add('active');
            currentSlide = index;
        }
        function nextSlide() { showSlide(currentSlide + 1); }
        function prevSlide() { showSlide(currentSlide - 1); }
        function startSlideShow() {
            stopSlideShow();
            if (slides.length > 1) slideInterval = setInterval(nextSlide, slideDuration);
        }
        function stopSlideShow() { clearInterval(slideInterval); }

        if (slides.length > 0) {
            showSlide(currentSlide);
            startSlideShow();
            if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); stopSlideShow(); startSlideShow(); });
            if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); stopSlideShow(); startSlideShow(); });
            sliderContainer.addEventListener('mouseenter', stopSlideShow);
            sliderContainer.addEventListener('mouseleave', startSlideShow);
        }
    } // End slider logic


    // --- Mobile Navigation Toggle (Keep Existing) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            if (navUl.classList.contains('active')) {
                menuToggle.innerHTML = '×';
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }


    // --- Navigation Active State (Keep Existing) ---
    const currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) || "index.html";
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').substring(link.getAttribute('href').lastIndexOf('/') + 1) || "index.html";
        link.classList.remove('active');
        if (linkPage === currentPage) link.classList.add('active');
    });


    // --- DYNAMIC CONTENT GENERATION for Admin Features ---
    const contentContainer = document.getElementById('admin-features-content');

    // Check if we are on the admin-features page and the container exists
    if (contentContainer && currentPage === 'admin-features.html') {
        contentContainer.innerHTML = ''; // Clear the 'Loading...' text

        data.forEach(item => {
            // Create main section container
            const sectionEl = document.createElement('section');
            sectionEl.classList.add('content-section');

            // Add main section heading
            const sectionHeading = document.createElement('h3'); // Use h3 for sections within the page
            sectionHeading.textContent = item.section;
            sectionEl.appendChild(sectionHeading);

            // Create list for sub-features
            const listEl = document.createElement('ul');
            listEl.classList.add('feature-list');

            // Loop through potential sub-features (heading0, heading1, etc.)
            let i = 0;
            while (item[`heading${i}`] !== undefined || item[`text${i}`] !== undefined) {
                const heading = item[`heading${i}`];
                const text = item[`text${i}`];
                const imgSrc = item[`img${i}`]; // Get image source

                if (heading || text) { // Only create item if heading or text exists
                    const listItemEl = document.createElement('li');

                    // Add heading if it exists
                    if (heading) {
                        const itemHeading = document.createElement('strong');
                        itemHeading.textContent = heading;
                        listItemEl.appendChild(itemHeading);
                        // Add a line break or space after heading if text also exists
                        if (text) listItemEl.appendChild(document.createElement('br'));
                    }

                    // Add text using innerHTML to render <br> tags
                    if (text) {
                        const textSpan = document.createElement('span');
                        textSpan.innerHTML = text; // Use innerHTML here
                        listItemEl.appendChild(textSpan);
                    }

                    // Add image if it exists
                    if (imgSrc) {
                        const imgEl = document.createElement('img');
                        imgEl.src = imgSrc;
                        // Generate alt text (can be improved)
                        imgEl.alt = `${item.section} - ${heading || `Feature ${i + 1}`} Screenshot`;
                        listItemEl.appendChild(imgEl);
                    }

                    listEl.appendChild(listItemEl);
                }
                i++; // Move to the next potential sub-feature index
            }

            // Append the list only if it has items
            if (listEl.hasChildNodes()) {
                sectionEl.appendChild(listEl);
            }


            // Append the whole section to the main container
            contentContainer.appendChild(sectionEl);
        });
    } else if (contentContainer && currentPage !== 'admin-features.html') {
        // Optional: Handle case where the container exists but shouldn't be populated
        // contentContainer.innerHTML = '<p>This content is dynamically loaded on the Admin Features page.</p>';
    }

}); // End DOMContentLoaded