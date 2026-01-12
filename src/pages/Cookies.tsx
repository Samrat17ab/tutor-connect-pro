import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const cookieTypes = [
  {
    icon: Shield,
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.",
    required: true,
  },
  {
    icon: BarChart,
    title: "Analytics Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular.",
    required: false,
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.",
    required: false,
  },
  {
    icon: Cookie,
    title: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.",
    required: false,
  },
];

const Cookies = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
  });

  const handleSave = () => {
    toast({
      title: "Preferences saved",
      description: "Your cookie preferences have been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground">Cookie Policy</h1>
                  <p className="text-muted-foreground">Last updated: January 2026</p>
                </div>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
                <p className="text-lg text-muted-foreground">
                  This Cookie Policy explains how TutorConnect uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </div>

              {/* Cookie Preferences */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Manage Cookie Preferences</h2>
                <div className="space-y-6">
                  {cookieTypes.map((type, index) => {
                    const key = type.title.split(' ')[0].toLowerCase() as keyof typeof preferences;
                    return (
                      <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <type.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor={key} className="text-lg font-medium text-foreground">
                              {type.title}
                            </Label>
                            <Switch
                              id={key}
                              checked={preferences[key]}
                              onCheckedChange={(checked) => 
                                !type.required && setPreferences({ ...preferences, [key]: checked })
                              }
                              disabled={type.required}
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                          {type.required && (
                            <span className="text-xs text-primary mt-2 inline-block">Always active</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button onClick={handleSave} className="mt-6">Save Preferences</Button>
              </div>

              {/* Policy Content */}
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Why Do We Use Cookies?</h2>
                  <p className="text-muted-foreground">
                    We use cookies for several reasons. Some cookies are required for technical reasons for our website to operate, and we refer to these as "essential" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How Can You Control Cookies?</h2>
                  <p className="text-muted-foreground">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences using the toggle switches above. You can also set or amend your web browser controls to accept or refuse cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about our use of cookies, please contact us at privacy@tutorconnect.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
