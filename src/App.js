import React, { useState } from 'react';
import { 
  Brain, 
  PaintBucket, 
  Globe, 
  PenTool, 
  Code, 
  BarChart3, 
  Target,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';

const CaseStudyModal = ({ caseStudy, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{caseStudy.title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
            <p className="text-gray-600">{caseStudy.challenge}</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Solution</h4>
            <p className="text-gray-600">{caseStudy.solution}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Results</h4>
            <ul className="space-y-2">
              {caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <ChevronRight className="w-4 h-4 text-green-500 mr-2" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, subservices, caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <div 
        className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 cursor-pointer
          ${isExpanded ? 'ring-2 ring-blue-400' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className={`space-y-4 transition-all ${isExpanded ? 'block' : 'hidden'}`}>
          <ul className="space-y-2">
            {subservices.map((service, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                {service}
              </li>
            ))}
          </ul>
          
          {caseStudy && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCaseStudy(true);
              }}
              className="mt-4 flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Case Study
            </button>
          )}
        </div>
        
        <div className={`text-blue-600 text-sm mt-2 ${isExpanded ? 'hidden' : 'block'}`}>
          Click to expand
        </div>
      </div>

      {showCaseStudy && (
        <CaseStudyModal 
          caseStudy={caseStudy} 
          onClose={() => setShowCaseStudy(false)} 
        />
      )}
    </>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "Marketing Strategy",
      description: "Data-driven strategies that align with your business goals",
      subservices: [
        "Market Research & Analysis",
        "Competitive Positioning",
        "Go-to-Market Planning",
        "Growth Strategy Development"
      ],
      caseStudy: {
        title: "Global Tech Startup Market Entry",
        challenge: "A growing tech startup needed to enter new markets but lacked local market understanding and brand recognition.",
        solution: "Developed comprehensive market entry strategy including detailed competitor analysis, target audience profiling, and localized marketing approaches.",
        results: [
          "Successfully entered 3 new markets within 6 months",
          "Achieved 150% YoY growth in new markets",
          "Established strong brand presence with 45% brand recall",
          "Secured 3 major enterprise clients within first quarter"
        ]
      }
    },
    {
      icon: PaintBucket,
      title: "Brand Identity",
      description: "Creating memorable brands that resonate with your audience",
      subservices: [
        "Visual Identity Design",
        "Brand Guidelines",
        "Brand Voice & Messaging",
        "Brand Architecture"
      ],
      caseStudy: {
        title: "Retail Chain Rebranding",
        challenge: "A 30-year-old retail chain needed to modernize their brand while retaining customer trust and recognition.",
        solution: "Created a refreshed brand identity that honored their heritage while introducing modern elements and digital-first approaches.",
        results: [
          "95% positive customer feedback on new branding",
          "32% increase in social media engagement",
          "28% boost in customer acquisition",
          "Successful rollout across 50+ locations"
        ]
      }
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive online presence management",
      subservices: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Email Marketing",
        "Performance Marketing"
      ],
      caseStudy: {
        title: "E-commerce Digital Transformation",
        challenge: "An established retailer needed to transition to digital-first marketing during global market shifts.",
        solution: "Implemented comprehensive digital marketing strategy across multiple channels with focus on SEO and social media.",
        results: [
          "300% increase in organic traffic",
          "45% improvement in conversion rates",
          "200% growth in social media engagement",
          "60% increase in online revenue"
        ]
      }
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging content that tells your story",
      subservices: [
        "Copywriting & Storytelling",
        "Video Production",
        "Graphic Design",
        "Social Media Content"
      ],
      caseStudy: {
        title: "B2B Content Strategy Overhaul",
        challenge: "A B2B software company struggled to communicate complex products to decision-makers.",
        solution: "Developed a multi-format content strategy focusing on educational content and thought leadership.",
        results: [
          "2x increase in qualified leads",
          "45% higher engagement on social platforms",
          "70% increase in resource downloads",
          "Established thought leadership in industry"
        ]
      }
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites that drive conversions",
      subservices: [
        "Responsive Design",
        "UX/UI Development",
        "E-commerce Solutions",
        "Website Maintenance"
      ],
      caseStudy: {
        title: "E-commerce Platform Renovation",
        challenge: "A fashion retailer's outdated website was causing lost sales and poor user experience.",
        solution: "Built a modern, responsive e-commerce platform with enhanced UX and mobile-first design.",
        results: [
          "65% reduction in cart abandonment",
          "40% increase in mobile conversions",
          "3x faster page load speed",
          "50% increase in average order value"
        ]
      }
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights for informed decisions",
      subservices: [
        "Performance Tracking",
        "ROI Analysis",
        "Custom Reporting",
        "Data Visualization"
      ],
      caseStudy: {
        title: "Marketing Analytics Implementation",
        challenge: "A multi-channel retailer struggled to track campaign effectiveness across platforms.",
        solution: "Implemented comprehensive analytics system with custom dashboards and automated reporting.",
        results: [
          "Identified 40% cost savings in ad spend",
          "Improved campaign ROI by 85%",
          "Reduced reporting time by 75%",
          "Enhanced decision-making with real-time data"
        ]
      }
    },
    {
      icon: Target,
      title: "Campaign Management",
      description: "End-to-end campaign execution and optimization",
      subservices: [
        "Campaign Strategy",
        "Implementation & Execution",
        "Performance Optimization",
        "Success Measurement"
      ],
      caseStudy: {
        title: "Multi-Channel Campaign Launch",
        challenge: "A lifestyle brand needed to launch a new product line across multiple channels simultaneously.",
        solution: "Developed and executed integrated campaign strategy across digital and traditional channels.",
        results: [
          "Exceeded sales targets by 200%",
          "Achieved 85% brand awareness in target market",
          "Generated 50k+ user-generated content pieces",
          "Secured coverage in major industry publications"
        ]
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Full-Service Marketing Solutions</h2>
        <p className="text-xl text-gray-600">From strategy to execution, we're those guys who make it happen</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 text-lg">
          Because when your brilliance needs a spotlight,<br />
          you don't need to remember our name.<br />
          <span className="font-semibold">You just need to call Those Guys.</span>
        </p>
      </div>
    </div>
  );
};

export default ServicesOverview;

