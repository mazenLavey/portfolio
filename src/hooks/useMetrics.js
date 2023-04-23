import ReactGA from "react-ga4";

const useMetrics= ()=>{
    function sendMetrics(category, action, label) {

        if (category && action && label) {
            ReactGA.event({
                category: category,
                action: action,
                label: label,
            });
        };
    };

    return {sendMetrics};
};

export default useMetrics;