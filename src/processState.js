import { v4 as uuidv4 } from "uuid";

export const ProcessState = () => {
  return [
  
        {
          title: "Discovery & Strategy",
          description:
          "I digest user data, research your industry, take stock of the competition, and devise a plan.",
          active: true,
          id: uuidv4(),
        },
        {
            title: "Wireframes & Flows",
            description:
            "I focus on the functionality, the navigation and getting the content hierarchy and the main structure on point.",
            active: false,
            id: uuidv4(),
          },
          {
            title: "Hi-Fidelity & Visuals",
            description:
            "I convert the wireframes into high fidelity screens, focussing more on the visual design & motion to create an engaging experience.",
            active: false,
            id: uuidv4(),
          },
          {
            title: "Motion & Handoff",
            description:
            "I finalise  all the screens and bring uniqueness & life to them, put together a UI-kit to make sure you can easily build more screens.",
            active: false,
            id: uuidv4(),
          },
    
  
    
  ];
};