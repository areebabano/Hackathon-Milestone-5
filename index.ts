// // TypeScript version of the provided JavaScript code

// // Function to generate a unique identifier
// // Function to save content to localStorage
// function saveContent(): void {
//     const editableElements = document.querySelectorAll('[contenteditable="true"]') as NodeListOf<HTMLElement>;
//     editableElements.forEach(el => {
//         if (el.id) {
//             localStorage.setItem(el.id, el.innerHTML);
//         }
//     });
// }

// // Restore content from localStorage
// function restoreContent(): void {
//     const editableElements = document.querySelectorAll('[contenteditable="true"]') as NodeListOf<HTMLElement>;
//     editableElements.forEach(el => {
//         if (el.id) {
//             const savedContent = localStorage.getItem(el.id);
//             if (savedContent) {
//                 el.innerHTML = savedContent;
//             }
//         }
//     });
// }

// // Event listener for the Save button
// const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement | null;
// saveBtn?.addEventListener('click', saveContent);

// // Call restoreContent on page load to initialize content
// document.addEventListener('DOMContentLoaded', restoreContent);

// // Theme switcher logic
// document.addEventListener('DOMContentLoaded', () => {
//     const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement | null;
//     if (themeSwitcher) {
//         themeSwitcher.addEventListener('click', () => {
//             document.body.classList.toggle('theme-dark');
//         });
//     }
// });

// // Event listeners for editable elements
// document.addEventListener('DOMContentLoaded', () => {
//     const editableElements = document.querySelectorAll('[contenteditable="true"]') as NodeListOf<HTMLElement>;
//     editableElements.forEach(element => {
//         element.addEventListener('focusout', () => {
//             const links = element.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
//             links.forEach(link => {
//                 link.setAttribute('href', link.textContent?.trim() || '');
//             });
//         });
//         element.addEventListener('click', (event: MouseEvent) => {
//             const target = event.target as HTMLElement;
//             if (target.tagName === 'A') {
//                 event.preventDefault();
//                 const url = (target as HTMLAnchorElement).getAttribute('href');
//                 if (url) {
//                     window.open(url, '_blank');
//                 }
//             }
//         });
//     });

//     const downloadResume = document.getElementById('downloadResume') as HTMLButtonElement | null;
//     downloadResume?.addEventListener('click', () => {
//         window.print(); // Open the print dialog
//     });
// });

// // Event listener for "Generate Resume" button
// document.addEventListener('DOMContentLoaded', () => {
//     const generateLinkBtn = document.getElementById('generateLink') as HTMLButtonElement | null;
//     generateLinkBtn?.addEventListener('click', () => {
//         const userNameElement = document.getElementById('userName') as HTMLElement | null;
//         const userName = userNameElement?.textContent?.trim();
//         if (userName) {
//             const resumeUrl = `${window.location.origin}/resume/${encodeURIComponent(userName)}`;
//             (document.getElementById('resumeLink') as HTMLInputElement).value = resumeUrl;
//         } else {
//             alert('Please enter your name');
//         }
//     });
// });

// // Share Resume button to copy the unique link
// const shareResume = document.getElementById('shareResume') as HTMLButtonElement | null;
// shareResume?.addEventListener('click', () => {
//     const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
//     if (resumeLink) {
//         navigator.clipboard.writeText(resumeLink).then(
//             () => alert('Resume link copied to clipboard'),
//             () => alert('Failed to copy the link')
//         );
//     } else {
//         alert('Generate the link first');
//     }
// });

// // Add More Skills Logic
// const addSkillBtn = document.getElementById('add-skill') as HTMLButtonElement | null;
// addSkillBtn?.addEventListener('click', () => {
//     const firstSkillInput = document.querySelector('#skills-container input') as HTMLInputElement | null;
//     if (!firstSkillInput || !firstSkillInput.value.trim()) {
//         alert('Please fill in the first skill before adding more.');
//         return;
//     }
//     const skillInput = document.createElement('input') as HTMLInputElement;
//     skillInput.type = 'text';
//     skillInput.placeholder = 'Skill';
//     skillInput.required = true;
//     (document.getElementById('skills-container') as HTMLElement).appendChild(skillInput);
// });

// // Event Listener for "Generate Resume" button
// const form = document.getElementById('form') as HTMLFormElement | null;
// form?.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     if (!validateFormFields()) {
//         return;
//     }

//     const userName = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const contact = (document.getElementById('contact') as HTMLInputElement).value;
//     const portfolio = (document.getElementById('portfolio') as HTMLInputElement).value;
//     const linkedIn = (document.getElementById('linkedin') as HTMLInputElement).value;
//     const degree = (document.getElementById('degree') as HTMLInputElement).value;
//     const institution = (document.getElementById('institution') as HTMLInputElement).value;
//     const year = (document.getElementById('year') as HTMLInputElement).value;
//     const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
//     const company = (document.getElementById('company-name') as HTMLInputElement).value;
//     const startDate = (document.getElementById('start-date') as HTMLInputElement).value;
//     const endDate = (document.getElementById('end-date') as HTMLInputElement).value;

//     (document.getElementById('resume-name') as HTMLElement).textContent = userName;
//     (document.getElementById('resume-email') as HTMLElement).textContent = email;
//     (document.getElementById('resume-contact') as HTMLElement).textContent = contact;
//     (document.getElementById('resume-portfolio') as HTMLElement).textContent = portfolio;
//     (document.getElementById('resume-linkedin') as HTMLElement).textContent = linkedIn;
//     (document.getElementById('resume-degree') as HTMLElement).textContent = degree;
//     (document.getElementById('resume-institution') as HTMLElement).textContent = institution;
//     (document.getElementById('resume-year') as HTMLElement).textContent = year;
//     (document.getElementById('resume-job-title') as HTMLElement).textContent = jobTitle;
//     (document.getElementById('resume-company-name') as HTMLElement).textContent = company;
//     (document.getElementById('resume-start-date') as HTMLElement).textContent = startDate;
//     (document.getElementById('resume-end-date') as HTMLElement).textContent = endDate;

//     const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];
//     if (profilePic) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             (document.getElementById('display-profile-pic') as HTMLImageElement).src = e.target?.result as string;
//         };
//         reader.readAsDataURL(profilePic);
//     }

//     const skillInputs = document.querySelectorAll('#skills-container input') as NodeListOf<HTMLInputElement>;
//     const skills: string[] = [];
//     skillInputs.forEach(input => {
//         if (input.value.trim()) {
//             skills.push(input.value);
//         }
//     });

//     const displaySkills = document.getElementById('display-skill-list') as HTMLElement;
//     if (displaySkills) {
//         displaySkills.innerHTML = '';
//         skills.forEach(skill => {
//             const skillItem = document.createElement('li');
//             skillItem.textContent = skill;
//             displaySkills.appendChild(skillItem);
//         });
//     }
// });

// // Form Validation
// function validateFormFields(): boolean {
//     let isValid = true;
//     let errorMessage = '';

//     const userName = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const contact = (document.getElementById('contact') as HTMLInputElement).value;
//     const portfolio = (document.getElementById('portfolio') as HTMLInputElement).value;
//     const linkedIn = (document.getElementById('linkedin') as HTMLInputElement).value;
//     const degree = (document.getElementById('degree') as HTMLInputElement).value;
//     const institution = (document.getElementById('institution') as HTMLInputElement).value;
//     const year = (document.getElementById('year') as HTMLInputElement).value;
//     const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
//     const company = (document.getElementById('company-name') as HTMLInputElement).value;
//     const startDate = (document.getElementById('start-date') as HTMLInputElement).value;
//     const endDate = (document.getElementById('end-date') as HTMLInputElement).value;

//     if (!userName) {
//         isValid = false;
//         errorMessage += 'Name is required.\n';
//     }
//     if (!email) {
//         isValid = false;
//         errorMessage += 'Email is required.\n';
//     }
//     if (!contact) {
//         isValid = false;
//         errorMessage += 'Contact number is required.\n';
//     }
//     if (!portfolio) {
//         isValid = false;
//         errorMessage += 'Portfolio link is required.\n';
//     }
//     if (!linkedIn) {
//         isValid = false;
//         errorMessage += 'LinkedIn link is required.\n';
//     }
//     if (!degree) {
//         isValid = false;
//         errorMessage += 'Degree is required.\n';
//     }
//     if (!institution) {
//         isValid = false;
//         errorMessage += 'Institution is required.\n';
//     }
//     if (!year) {
//         isValid = false;
//         errorMessage += 'Year is required.\n';
//     }
//     if (!jobTitle) {
//         isValid = false;
//         errorMessage += 'Job title is required.\n';
//     }
//     if (!company) {
//         isValid = false;
//         errorMessage += 'Company name is required.\n';
//     }
//     if (!startDate) {
//         isValid = false;
//         errorMessage += 'Start date is required.\n';
//     }
//     if (!endDate) {
//         isValid = false;
//         errorMessage += 'End date is required.\n';
//     }

//     if (!isValid) {
//         alert(errorMessage);
//     }
//     return isValid;
// }


// Function to generate a unique identifier
// Function to save content to localStorage
function saveContent() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        localStorage.setItem(el.id, el.innerHTML);
    });
  }
  
  // Restore content from localStorage
  function restoreContent() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(el => {
        const savedContent = localStorage.getItem(el.id);
        if (savedContent) {
            el.innerHTML = savedContent;
        }
    });
  }
  
  // Event listener for the Save button
  document.getElementById('saveBtn')?.addEventListener('click', saveContent);
  
  // Call restoreContent on page load to initialize content
  document.addEventListener('DOMContentLoaded', restoreContent);
  
  document.addEventListener('DOMContentLoaded', () => {
    // Select the theme switcher button
    const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement;
  
    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', () => {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
  
    editableElements.forEach(element => {
        element.addEventListener('focusout', () => {
            const links = element.querySelectorAll('a');
            links.forEach(link => {
                // Ensure the href attribute is updated with the new value after editing
                link.setAttribute('href', link.textContent?.trim() || '');
            });
        });
  
        element.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A') {
                
                event.preventDefault();
  
                // Get the href attribute and navigate to that URL
                const url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
  
    // Event listener for the Download Resume button
    document.getElementById('downloadResume')?.addEventListener('click', () => {
        window.print(); // Open the print dialog
    });
  });
  
  // main.ts
  document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
  
    // Ensuring the href of the links in the editable elements is updated
    editableElements.forEach(element => {
        element.addEventListener('focusout', () => {
            const links = element.querySelectorAll('a');
            links.forEach(link => {
                link.setAttribute('href', link.textContent?.trim() || '');
            });
        });
  
        element.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === 'A') {
                event.preventDefault();
                const url = target.getAttribute('href');
                if (url) {
                    window.open(url, '_blank');
                }
            }
        });
    });
  
    // Event listener for the Download Resume button
    document.getElementById('downloadResume')?.addEventListener('click', () => {
        window.print(); // Open the print dialog
    });
  
    document.addEventListener('DOMContentLoaded', () => {
      // Generate unique URL based on the name in the editable H1
      document.getElementById('generateLink')?.addEventListener('click', () => {
          let userName = (document.getElementById('userName') as HTMLElement).textContent?.trim();
          if (userName) {
              // Create a unique URL based on the user’s name
              const resumeUrl = `${window.location.origin}/resume/${encodeURIComponent(userName)}`;
              (document.getElementById('resumeLink') as HTMLInputElement).value = resumeUrl;
          } else {
              alert('Please enter your name');
         }
      });
  });
  
  // Share Resume button to copy the unique link
  document.getElementById('shareResume')?.addEventListener('click', () => {
      const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
      if (resumeLink) {
          navigator.clipboard.writeText(resumeLink).then(() => {
              alert('Resume link copied to clipboard');
          }, () => {
              alert('Failed to copy the link');
          });
      } else {
          alert('Generate the link first');
      }
  });
  });
  
  // Add More Skills Logic
  document.getElementById("add-skill")?.addEventListener("click", () => {
    const firstSkillInput = document.querySelector("#skills-container input") as HTMLInputElement;
  
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
      alert("Please fill in the first skill before adding more.");
      return;
    }
  
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
  
    document.getElementById("skills-container")?.appendChild(skillInput);
  });
  
  // Event Listener for "Generate Resume" button
  document.getElementById("form")?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
  
    if (!validateFormFields()) {
      return;
    }
  
    // Capture form data
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;

    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;

    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company-name") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
  
    // Display other dynamic content
    (document.getElementById("resume-name") as HTMLElement).textContent = userName;
    (document.getElementById("resume-email") as HTMLElement).textContent = email;
    (document.getElementById("resume-contact") as HTMLElement).textContent = contact;
    (document.getElementById("resume-portfolio") as HTMLElement).textContent = portfolio;
    (document.getElementById("resume-linkedin") as HTMLElement).textContent = linkedIn;

    (document.getElementById("resume-degree") as HTMLElement).textContent = degree;
    (document.getElementById("resume-institution") as HTMLElement).textContent = institution;
    (document.getElementById("resume-year") as HTMLElement).textContent = year;

    (document.getElementById("resume-job-title") as HTMLElement).textContent = jobTitle;
    (document.getElementById("resume-company-name") as HTMLElement).textContent = company;
    (document.getElementById("resume-start-date") as HTMLElement).textContent = startDate;
    (document.getElementById("resume-end-date") as HTMLElement).textContent = endDate;
  
    // Handle Profile Picture
    const profilePic = (document.getElementById("profile-picture") as HTMLInputElement).files?.[0];
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
        (document.getElementById("resume-profile-pic") as HTMLImageElement).src = e.target?.result as string;
      };
      reader.readAsDataURL(profilePic);
    }
  
    // Collect and display skills
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
    const skills: string[] = [];
    skillInputs.forEach(input => {
      if (input.value.trim()) {
        skills.push(input.value);
      }
    });
  
    const displaySkills = document.getElementById("resume-skill-list");
    if (displaySkills) {
      displaySkills.innerHTML = "";
      skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        displaySkills.appendChild(skillItem);
      });
    }
  
  });
  // Form Validation
  function validateFormFields(): boolean {
    let isValid = true;
    let errorMessage = "";
  
  
    //capture Input Fields
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;

    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;

    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company-name") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
  
    //validate user
    if (!userName) {
      isValid = false;
      errorMessage += "Name is required.\n";
    }
    //validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errorMessage += "Valid email is required.\n";
    }
    //validate user phone number
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(contact)) {
      isValid = false;
      errorMessage += "Valid phone number is required.\n";
    }
    //validate user degree
    if (!degree) {
      isValid = false;
      errorMessage += "Degree is required.\n";
    }
    //validate institution
    if (!institution) {
      isValid = false;
      errorMessage += "Institution is required.\n";
    }
    //validate date
    if (!year) {
      isValid = false;
      errorMessage += "Graduation year is required.\n";
    }
    //validate job title
    if (!jobTitle) {
      isValid = false;
      errorMessage += "Job Title is required.\n";
    }
    //validate company
    if (!company) {
      isValid = false;
      errorMessage += "Company is required.\n";
    }
    //validate start date
    if (!startDate) {
      isValid = false;
      errorMessage += "Start date is required.\n";
    }
    //validate end date
    if (!endDate) {
      isValid = false;
      errorMessage += "End date is required.\n";
    }
  
    //validate skills 
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
      isValid = false;
      errorMessage += "At least one skill is required.\n";
    }
    
  
    //check if there is error show alert
    if (errorMessage) {
      alert(errorMessage);
    }
  
    //otherwise return ture and generate form
    return isValid;
  };
  
  
  // Define the ResumeData interface to represent the structure of resume data
  interface ResumeData {
    name: string;
    email: string;
    contact: string;
    portfolio: string;
    linkedin: string;
    degree: string;
    institution: string;
    graduationYear: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    skills: string[];
  }
  
  // Initialize resumeData with default values
  let resumeData: ResumeData = {
    name: "",
    email: "",
    contact: "",
    portfolio: "",
    linkedin: "",
    degree: "",
    institution: "",
    graduationYear: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    skills: [],
  };
  
  // Function to save changes made to resume data
  function saveChanges(fieldId: keyof ResumeData, value: string) {
    console.log(`Field edited: ${fieldId}, New Value: ${value}`);
  
    // Check if the field is an array (skills in this case)
    if (Array.isArray(resumeData[fieldId])) {
      resumeData[fieldId].push(value); // Add new skill to the array
    } else {
      resumeData[fieldId] = value as any; // Update other fields with the new value
    }
  
    console.log("Updated resume data:", resumeData);
  }
  
  // Add an event listener for DOMContentLoaded to ensure elements are available
  document.addEventListener("DOMContentLoaded", () => {
    // Capture all elements with contenteditable attribute set to true
    document.querySelectorAll("[contenteditable=true]").forEach((element) => {
      // Add an input event listener to each of these elements
      element.addEventListener("input", (event) => {
        const target = event.target as HTMLElement;
        // Call saveChanges with the id of the element and its new innerText
        saveChanges(target.id as keyof ResumeData, target.innerText);
      });
    });
  });
  
  
  function printResume(){
    window.print()
  }
  // Add event listener for "Download Resume" button
  document.querySelector(".download-buttn")?.addEventListener("click", () => {
    printResume();
  });