export type TabbedSliderBlock = {
  id: string;
  type: "TabbedSlider";
  fields: {
    heading: {
        id: string;
        label: string;
        type: string;
        value: string;
    };
    description: {
        id: string;
        label: string;
        type: string;
        value: string;
    };
    tabs: {
        id: string;
        label: string;
        type: string;
        items: {
            id: string;
            label: string;
            subfields: {
                subheading: {
                    id: string;
                    label: string;
                    type: string;
                    value: string;
                };
                cards: {
                    items: {
                        id: string;
                        title: string;
                        image: string;
                        description: string;
                        link: [string, string, string];
                    }[];
                };
            };
         }[];
     };
  };
  settings: {
    backgroundColor: string;
  };
};


export type NumberedStepsBlock = {
  id: string;
  type: "NumberedSteps";
  fields: {
    heading: {
      id: string;
      label: string;
      type: string;
      value: string;
    };
    description: {
      id: string;
      label: string;
      type: string;
      value: string;
    };
    steps: {
      id: string;
      label: string;
      type: string;
      items: {
        id: string;
        title: string;
        description: string;
        image: string;
      }[];
    };
  };
  settings: {
    backgroundColor: string;
  };
};

export type Block = TabbedSliderBlock | NumberedStepsBlock;