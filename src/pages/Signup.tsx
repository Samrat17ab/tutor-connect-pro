import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  GraduationCap, Mail, Lock, Eye, EyeOff, User, ArrowLeft, Users, BookOpen,
  Phone, Calendar, MapPin, Upload, CheckCircle, FileText, IdCard, Award,
  Building, School
} from "lucide-react";
import { toast } from "sonner";

type UserType = "student" | "teacher" | null;
type Step = "select-type" | "basic-info" | "verify-email" | "verify-phone" | "documents" | "complete";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [currentStep, setCurrentStep] = useState<Step>("select-type");
  const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""]);
  const [phoneOtp, setPhoneOtp] = useState(["", "", "", "", "", ""]);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Student specific
    schoolName: "",
    grade: "",
    parentName: "",
    parentPhone: "",
    
    // Teacher specific
    qualification: "",
    experience: "",
    subjects: "",
    bio: "",
    
    // Documents
    idType: "",
    idDocument: null as File | null,
    citizenshipDocument: null as File | null,
    schoolIdCard: null as File | null,
    educationCertificate: null as File | null,
  });

  const handleOtpChange = (index: number, value: string, type: "email" | "phone") => {
    if (value.length > 1) return;
    
    const otpArray = type === "email" ? [...emailOtp] : [...phoneOtp];
    otpArray[index] = value;
    
    if (type === "email") {
      setEmailOtp(otpArray);
    } else {
      setPhoneOtp(otpArray);
    }
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`${type}-otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyEmailOtp = () => {
    const otp = emailOtp.join("");
    if (otp.length === 6) {
      // Demo: Accept any 6-digit OTP
      setIsEmailVerified(true);
      toast.success("Email verified successfully!");
      setTimeout(() => setCurrentStep("verify-phone"), 500);
    } else {
      toast.error("Please enter a valid 6-digit OTP");
    }
  };

  const handleVerifyPhoneOtp = () => {
    const otp = phoneOtp.join("");
    if (otp.length === 6) {
      // Demo: Accept any 6-digit OTP
      setIsPhoneVerified(true);
      toast.success("Phone verified successfully!");
      setTimeout(() => setCurrentStep("documents"), 500);
    } else {
      toast.error("Please enter a valid 6-digit OTP");
    }
  };

  const handleSendOtp = (type: "email" | "phone") => {
    toast.success(`Demo OTP sent to your ${type}! (Use any 6 digits)`);
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    setCurrentStep("verify-email");
    handleSendOtp("email");
  };

  const handleDocumentsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required documents
    if (!formData.idDocument) {
      toast.error("Please upload your ID document");
      return;
    }
    if (!formData.citizenshipDocument) {
      toast.error("Please upload your citizenship document");
      return;
    }
    if (userType === "teacher" && !formData.educationCertificate) {
      toast.error("Please upload your education certificate");
      return;
    }
    
    setCurrentStep("complete");
    toast.success("Account created successfully!");
  };

  const handleFinalSubmit = () => {
    console.log("Final signup data:", { ...formData, userType });
    toast.success("Welcome to TutorConnect!");
  };

  const steps = [
    { id: "select-type", label: "Account Type" },
    { id: "basic-info", label: "Personal Info" },
    { id: "verify-email", label: "Verify Email" },
    { id: "verify-phone", label: "Verify Phone" },
    { id: "documents", label: "Documents" },
    { id: "complete", label: "Complete" },
  ];

  const getStepIndex = (step: Step) => steps.findIndex(s => s.id === step);

  const renderStepIndicator = () => {
    if (currentStep === "select-type") return null;
    
    return (
      <div className="flex items-center justify-center gap-2 mb-8">
        {steps.slice(1).map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              getStepIndex(currentStep) > index 
                ? "bg-primary text-primary-foreground" 
                : getStepIndex(currentStep) === index + 1
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            }`}>
              {getStepIndex(currentStep) > index + 1 ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 2 && (
              <div className={`w-8 h-1 mx-1 rounded ${
                getStepIndex(currentStep) > index + 1 ? "bg-primary" : "bg-muted"
              }`} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderSelectType = () => (
    <div className="space-y-4">
      <p className="font-medium mb-4">I want to...</p>
      <button
        onClick={() => {
          setUserType("student");
          setCurrentStep("basic-info");
        }}
        className="w-full p-6 rounded-2xl border-2 border-border hover:border-primary bg-card hover:bg-primary/5 transition-all text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Find a Tutor</h3>
            <p className="text-sm text-muted-foreground">
              I'm a student or parent looking for tutoring
            </p>
          </div>
        </div>
      </button>
      <button
        onClick={() => {
          setUserType("teacher");
          setCurrentStep("basic-info");
        }}
        className="w-full p-6 rounded-2xl border-2 border-border hover:border-primary bg-card hover:bg-primary/5 transition-all text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Users className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Become a Tutor</h3>
            <p className="text-sm text-muted-foreground">
              I want to teach and earn on my own terms
            </p>
          </div>
        </div>
      </button>
    </div>
  );

  const renderBasicInfo = () => (
    <>
      <button
        onClick={() => {
          setUserType(null);
          setCurrentStep("select-type");
        }}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Change account type
      </button>

      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${
        userType === "student" 
          ? "bg-primary/10 text-primary" 
          : "bg-accent/10 text-accent"
      }`}>
        {userType === "student" ? <BookOpen className="w-4 h-4" /> : <Users className="w-4 h-4" />}
        {userType === "student" ? "Student / Parent" : "Teacher"}
      </div>

      <form onSubmit={handleBasicInfoSubmit} className="space-y-4">
        <h3 className="font-semibold text-lg border-b pb-2 mb-4">Personal Information</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="pl-10"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender *</Label>
            <select
              id="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Full Address *</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <textarea
              id="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              placeholder="Mumbai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              placeholder="Maharashtra"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode *</Label>
            <Input
              id="pincode"
              placeholder="400001"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Student Specific Fields */}
        {userType === "student" && (
          <>
            <h3 className="font-semibold text-lg border-b pb-2 mb-4 mt-6">Academic Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School/College Name *</Label>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="schoolName"
                    placeholder="ABC Public School"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Current Grade/Class *</Label>
                <select
                  id="grade"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Select Grade</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={`${i + 1}`}>Class {i + 1}</option>
                  ))}
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>
            </div>

            <h3 className="font-semibold text-lg border-b pb-2 mb-4 mt-6">Parent/Guardian Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  placeholder="Parent's Full Name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPhone">Parent's Phone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="parentPhone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Teacher Specific Fields */}
        {userType === "teacher" && (
          <>
            <h3 className="font-semibold text-lg border-b pb-2 mb-4 mt-6">Professional Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualification">Highest Qualification *</Label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    id="qualification"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    required
                  >
                    <option value="">Select Qualification</option>
                    <option value="12th">12th Grade</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">Ph.D.</option>
                    <option value="diploma">Diploma/Certificate</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Teaching Experience *</Label>
                <select
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjects">Subjects You Teach *</Label>
              <Input
                id="subjects"
                placeholder="e.g., Mathematics, Physics, Chemistry"
                value={formData.subjects}
                onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Brief Bio *</Label>
              <textarea
                id="bio"
                placeholder="Tell us about your teaching experience, methodology, and achievements..."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
            </div>
          </>
        )}

        <h3 className="font-semibold text-lg border-b pb-2 mb-4 mt-6">Create Password</h3>

        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Must be at least 8 characters with a number and symbol
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 rounded border-border"
          />
          <Label htmlFor="terms" className="text-sm text-muted-foreground font-normal">
            I agree to the{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Continue to Verification
        </Button>
      </form>
    </>
  );

  const renderVerifyEmail = () => (
    <div className="space-y-6">
      <button
        onClick={() => setCurrentStep("basic-info")}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to form
      </button>

      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
        <p className="text-muted-foreground">
          We've sent a 6-digit code to<br />
          <span className="font-medium text-foreground">{formData.email}</span>
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-2">
          {emailOtp.map((digit, index) => (
            <Input
              key={index}
              id={`email-otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value, "email")}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digit && index > 0) {
                  const prevInput = document.getElementById(`email-otp-${index - 1}`);
                  prevInput?.focus();
                }
              }}
              className="w-12 h-12 text-center text-xl font-bold"
            />
          ))}
        </div>

        <Button 
          onClick={handleVerifyEmailOtp} 
          className="w-full" 
          size="lg"
          disabled={isEmailVerified}
        >
          {isEmailVerified ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Email Verified
            </>
          ) : (
            "Verify Email"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button 
            onClick={() => handleSendOtp("email")}
            className="text-primary font-semibold hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );

  const renderVerifyPhone = () => (
    <div className="space-y-6">
      <button
        onClick={() => setCurrentStep("verify-email")}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Phone className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Verify Your Phone</h2>
        <p className="text-muted-foreground">
          We've sent a 6-digit code to<br />
          <span className="font-medium text-foreground">{formData.phone}</span>
        </p>
        <button 
          onClick={() => handleSendOtp("phone")}
          className="text-primary text-sm font-medium hover:underline mt-2"
        >
          Send OTP Now
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-2">
          {phoneOtp.map((digit, index) => (
            <Input
              key={index}
              id={`phone-otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value, "phone")}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digit && index > 0) {
                  const prevInput = document.getElementById(`phone-otp-${index - 1}`);
                  prevInput?.focus();
                }
              }}
              className="w-12 h-12 text-center text-xl font-bold"
            />
          ))}
        </div>

        <Button 
          onClick={handleVerifyPhoneOtp} 
          className="w-full" 
          size="lg"
          disabled={isPhoneVerified}
        >
          {isPhoneVerified ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Phone Verified
            </>
          ) : (
            "Verify Phone"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Didn't receive the code?{" "}
          <button 
            onClick={() => handleSendOtp("phone")}
            className="text-primary font-semibold hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <form onSubmit={handleDocumentsSubmit} className="space-y-6">
      <button
        type="button"
        onClick={() => setCurrentStep("verify-phone")}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Upload Documents</h2>
        <p className="text-muted-foreground">
          Please upload the required documents for verification
        </p>
      </div>

      <div className="space-y-4">
        {/* ID Document */}
        <div className="space-y-2">
          <Label>Government ID Type *</Label>
          <select
            value={formData.idType}
            onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          >
            <option value="">Select ID Type</option>
            <option value="aadhar">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="pan">PAN Card</option>
            <option value="driving">Driving License</option>
            <option value="voter">Voter ID</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label>Upload ID Document *</Label>
          <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              id="idDocument"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange("idDocument", e.target.files?.[0] || null)}
              className="hidden"
            />
            <label htmlFor="idDocument" className="cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <IdCard className="w-6 h-6 text-primary" />
              </div>
              {formData.idDocument ? (
                <p className="text-sm font-medium text-primary">{formData.idDocument.name}</p>
              ) : (
                <>
                  <p className="text-sm font-medium">Click to upload</p>
                  <p className="text-xs text-muted-foreground">PDF, JPG, PNG up to 5MB</p>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Citizenship Document */}
        <div className="space-y-2">
          <Label>Citizenship Document *</Label>
          <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              id="citizenshipDocument"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange("citizenshipDocument", e.target.files?.[0] || null)}
              className="hidden"
            />
            <label htmlFor="citizenshipDocument" className="cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6 text-primary" />
              </div>
              {formData.citizenshipDocument ? (
                <p className="text-sm font-medium text-primary">{formData.citizenshipDocument.name}</p>
              ) : (
                <>
                  <p className="text-sm font-medium">Click to upload citizenship proof</p>
                  <p className="text-xs text-muted-foreground">Birth certificate, passport, or citizenship card</p>
                </>
              )}
            </label>
          </div>
        </div>

        {/* School/College ID - For Students */}
        {userType === "student" && (
          <div className="space-y-2">
            <Label>School/College ID Card (Optional)</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="schoolIdCard"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange("schoolIdCard", e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="schoolIdCard" className="cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <School className="w-6 h-6 text-primary" />
                </div>
                {formData.schoolIdCard ? (
                  <p className="text-sm font-medium text-primary">{formData.schoolIdCard.name}</p>
                ) : (
                  <>
                    <p className="text-sm font-medium">Click to upload school ID</p>
                    <p className="text-xs text-muted-foreground">School or college identification card</p>
                  </>
                )}
              </label>
            </div>
          </div>
        )}

        {/* Education Certificate - For Teachers */}
        {userType === "teacher" && (
          <div className="space-y-2">
            <Label>Highest Education Certificate *</Label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="educationCertificate"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange("educationCertificate", e.target.files?.[0] || null)}
                className="hidden"
              />
              <label htmlFor="educationCertificate" className="cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                {formData.educationCertificate ? (
                  <p className="text-sm font-medium text-primary">{formData.educationCertificate.name}</p>
                ) : (
                  <>
                    <p className="text-sm font-medium">Click to upload certificate</p>
                    <p className="text-xs text-muted-foreground">Degree certificate, diploma, or marksheet</p>
                  </>
                )}
              </label>
            </div>
          </div>
        )}
      </div>

      <Button type="submit" className="w-full" size="lg">
        <Upload className="w-5 h-5 mr-2" />
        Submit Documents
      </Button>
    </form>
  );

  const renderComplete = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-primary" />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
        <p className="text-muted-foreground">
          Your account has been created successfully. Our team will verify your documents within 24-48 hours.
        </p>
      </div>

      <div className="bg-muted/50 rounded-xl p-4 text-left">
        <h3 className="font-semibold mb-2">What happens next?</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Our team will review your documents</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>You'll receive an email once verified</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Then you can start {userType === "teacher" ? "teaching" : "learning"}!</span>
          </li>
        </ul>
      </div>

      <Button onClick={handleFinalSubmit} className="w-full" size="lg" asChild>
        <Link to={userType === "teacher" ? "/teacher-dashboard" : "/student-dashboard"}>
          Go to Dashboard
        </Link>
      </Button>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "select-type":
        return renderSelectType();
      case "basic-info":
        return renderBasicInfo();
      case "verify-email":
        return renderVerifyEmail();
      case "verify-phone":
        return renderVerifyPhone();
      case "documents":
        return renderDocuments();
      case "complete":
        return renderComplete();
      default:
        return renderSelectType();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex flex-col justify-start px-4 py-8 sm:px-6 lg:px-12 xl:px-16 overflow-y-auto">
        <div className="mx-auto w-full max-w-lg">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TutorConnect</span>
          </Link>

          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-6">
            {currentStep === "select-type" 
              ? "Start your learning or teaching journey today"
              : `Step ${getStepIndex(currentStep)} of ${steps.length - 1}`
            }
          </p>

          {renderStepIndicator()}
          {renderCurrentStep()}

          {currentStep === "select-type" && (
            <p className="text-center text-sm text-muted-foreground mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-foreground items-center justify-center p-12 sticky top-0 h-screen">
        <div className="max-w-md text-background">
          <h2 className="text-3xl font-bold mb-6">
            Join our growing community
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you're here to learn or teach, you're joining thousands who are transforming education together.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-sm opacity-80">Students</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-sm opacity-80">Tutors</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <p className="text-4xl font-bold mb-2">500K+</p>
              <p className="text-sm opacity-80">Classes</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/10">
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-sm opacity-80">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
