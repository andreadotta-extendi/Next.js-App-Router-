import { generateDetailEduPaths } from "../Shared/mocks";
import EducationalPathDetail from "./EducationalPathDetail";

// Generate some mock educational paths
const mockDetailEduPathProps = generateDetailEduPaths(1)[0];

// Render the component with mock data
const EducationalPathDetailPage = () => {
  return <EducationalPathDetail {...mockDetailEduPathProps} />;
};

export default EducationalPathDetailPage;
