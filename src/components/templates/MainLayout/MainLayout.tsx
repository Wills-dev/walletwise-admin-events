import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[linear-gradient(180deg,#615853_0%,#6B615A_21.74%,#857772_37.98%,#7E706B_75%,#1E1C18_100%)]">
      <div className="min-h-sreen h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-132.75">
          <div className="backdrop-blur-2xl bg-white/20 rounded-[20px] p-2">
            <div
              className="relative backdrop-blur-2xl bg-black/35 rounded-[20px] p-8 max-sm:px-4 border border-white/30"
              style={{
                boxShadow: `
                0 8px 32px 0 rgba(31, 38, 135, 0.15),
                inset 0 0 0 1px rgba(255, 255, 255, 0.2),
                0 1px 0 0 rgba(255, 255, 255, 0.4) inset
              `,
              }}
            >
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="sm:text-3xl text-2xl font-semibold text-[#FFF5E4]">
                    Peruzzi Live In Abuja
                  </h2>
                  <p className="max-sm:text-sm text-white/60">
                    Please enter details to login
                  </p>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
