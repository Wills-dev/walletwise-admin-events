import Container from "@/components/atoms/Container/Container";
import OverviewWrapper from "@/components/organisms/OverviewWrapper/OverviewWrapper";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(180deg,#615853_0%,#6B615A_21.74%,#857772_37.98%,#7E706B_75%,#1E1C18_100%)]">
      <Container>
        <OverviewWrapper />
      </Container>
    </div>
  );
};

export default page;
