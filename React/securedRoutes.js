import { lazy } from "react";
const DesignatePersonnel = lazy(() =>
  import("components/dashboard/autentication/DesignatePersonnel")
);
const GamesTable = lazy(() =>
  import("../components/dashboard/game/GamesTable")
);
const CreateNewGameForm = lazy(() =>
  import("../components/dashboard/game/CreateNewGameForm")
);
const CheckoutSuccess = lazy(() =>
  import("../components/stripe/CheckoutSuccess")
);
const Assignments = lazy(() => import("../components/assignments/Assignments"));
const Candidates = lazy(() => import("../components/candidates/Candidates"));
const CandidatesForm = lazy(() =>
  import("../components/candidates/CandidatesForm")
);
const CandidateDashboard = lazy(() =>
  import("../components/candidates/CandidatesDashboard")
);
const PageNotFound = lazy(() => import("../components/error/Error404"));
const Officials = lazy(() => import("../components/officials/Officials"));
const MySubscriptionPage = lazy(() =>
  import("../components/stripe/MySubscriptionPage")
);
const StripeSubscriptions = lazy(() =>
  import("../components/stripe/StripeSubscriptions")
);
const SubscriptionSuccess = lazy(() =>
  import("../components/stripe/SubscriptionSuccess")
);
const ConnectedAccount = lazy(() =>
  import("../components/stripe/ConnectedAccount")
);
const StripeChargeForm = lazy(() =>
  import("../components/stripe/StripeChargeForm")
);
const PaymentSuccessPage = lazy(() =>
  import("../components/stripe/PaymentSuccessPage")
);
const StripeTransfers = lazy(() =>
  import("../components/stripe/StripeTransfers")
);
const TestProducts = lazy(() => import("../components/stripe/TestProducts"));
const OfficialsForm = lazy(() =>
  import("../components/officials/OfficialsForm")
);
const AddVenue = lazy(() => import("../components/venue/AddNewVenue"));
const FaqForm = lazy(() => import("../components/faqs/FaqForm"));
const Venue = lazy(() => import("../components/venue/Venue"));
const Grades = lazy(() => import("../components/grades/Grades"));
const Teams = lazy(() => import("../components/teams/Teams"));
const User = lazy(() => import("../components/useradmin/UserAdminView"));
const GameReports = lazy(() => import("../components/gamereport/GameReports"));
const ReportFormHeader = lazy(() =>
  import("../components/gamereport/ReportFormHeader")
);
const ReportFormFouls = lazy(() =>
  import("../components/gamereport/ReportFormFouls")
);
const CrewForm = lazy(() => import("../components/crews/CrewForm"));
const GradeFoulAnalytics = lazy(() =>
  import("../components/gradesfoulsanalytics/GradeFoulAnalytics")
);
const GameReplayReport = lazy(() =>
  import("../components/gamereport/ReplayReportForm")
);
const ReplayReportDetailed = lazy(() =>
  import("../components/gamereport/ReplayReportDetailed")
);
const AdminDashboard = lazy(() =>
  import("../components/admindashboard/AdminDashboard")
);
const FoulReport = lazy(() => import("../components/gamereport/FoulReport"));
const TestBuilder = lazy(() => import("../components/testbuilder/TestBuilder"));
const TestAnalytics = lazy(() =>
  import("../components/testanalytics/TestAnalytics")
);
const TestResults = lazy(() => import("../components/tests/TestResults"));
const TestResultsInstance = lazy(() =>
  import("../components/tests/TestResultsInstance")
);
const GradeTestInstance = lazy(() =>
  import("../components/tests/GradeTestInstance")
);
const AssignTest = lazy(() => import("../components/tests/AssignTest"));
const TestDetail = lazy(() => import("../components/tests/TestDetail"));
const TestPreview = lazy(() => import("../components/tests/TestPreview"));
const TestTaking = lazy(() => import("../components/tests/TestTaking"));
const TestForm = lazy(() => import("../components/test/TestForm"));
const Tests = lazy(() => import("../components/test/Tests"));
const FileManager = lazy(() => import("../components/files/FileManager"));
const PodcastForm = lazy(() => import("../components/podcasts/PodcastForm"));
const Translation = lazy(() =>
  import("../components/translation/TranslationForm")
);
const NewTeamForm = lazy(() => import("../components/teams/NewTeamForm"));
const AssignerDashboard = lazy(() =>
  import("../components/dashboard/assigner/AssignerDashboard")
);
const OfficialDashboard = lazy(() =>
  import("../components/officials/OfficialDashboard")
);
const ApparelList = lazy(() => import("../components/userapperal/ApparelList"));
const TeamMember = lazy(() => import("../components/teammember/TeamMembers"));
const TeamMemberForm = lazy(() =>
  import("../components/teammember/TeamMemberForm")
);
const Certifications = lazy(() =>
  import("../components/certifications/Certifications")
);
const CertificationsForm = lazy(() =>
  import("../components/certifications/CertificationsForm")
);
const ResourceForm = lazy(() => import("../components/resources/ResourceForm"));
const Resources = lazy(() => import("../components/resources/Resources"));
const TeamPersonnelForm = lazy(() =>
  import("../components/teampersonnel/TeamPersonnelForm")
);

const Conferences = lazy(() => import("../components/conferences/Conferences"));
const Announcement = lazy(() =>
  import("../components/announcements/AnnouncementListing")
);
const AnnouncementForm = lazy(() =>
  import("components/announcements/AnnouncementForm")
);

const BlogSingle = lazy(() =>
  import("../components/announcements/AnnouncementSingle")
);
const ConferencesForm = lazy(() =>
  import("../components/conferences/ConferencesForm")
);
const VideoForm = lazy(() => import("../components/video/VideoForm"));
const ProfileNav = lazy(() => import("../components/profilenav/ProfileNav"));
const TrainingVideoDetail = lazy(() =>
  import("../components/trainingvideodetail/TrainingVideoDetail")
);
const AssignmentForm = lazy(() =>
  import("../components/assignments/AssignmentForm")
);
const CrewDragNDrop = lazy(() =>
  import("../components/crewsdragndrop/DragNDrop")
);
const AdminFaq = lazy(() => import("../components/faqs/Faq"));
const DashboardHome = lazy(() => import("../layouts/dashboard/DashboardHome"));
const ZoomMeeting = lazy(() => import("../components/zoom/CreateZoomMeeting"));
const UserMeetings = lazy(() => import("../components/zoom/SeeUserMeetings"));
const CertificationResults = lazy(() =>
  import("../components/certifications/CertificationResults")
);
const TeamPreview = lazy(() => import("../components/teampreview/TeamPreview"));

const Crews = lazy(() => import("../components/crews/Crews"));
const PageTranslation = lazy(() =>
  import("../components/translation/Translation")
);
const Messages = lazy(() => import("../components/dashboard/chat/Chat"));
const OfficialsConflictsForm = lazy(() =>
  import("../components/officialsconflicts/OfficialsConflictsForm")
);
const GetCurrentAssignment = lazy(() =>
  import("components/getcurrentassignments/GetCurrentAssignments")
);
const OfficialsConflictsTable = lazy(() =>
  import("../components/officialsconflicts/OfficialsConflictsTable")
);
const Seasons = lazy(() => import("../components/seasons/Seasons"));
const NewSeasonForm = lazy(() => import("../components/seasons/NewSeasonForm"));
const NewslettersubscriptionAdmin = lazy(() =>
  import("../components/newslettersubscription/NewsletterSubscriptionAdmin.jsx")
);

const Location = lazy(() => import("../components/locations/LocationForm"));

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Analytics",
    element: DashboardHome,
    roles: [
      "User",
      "Assigner",
      "Admin",
      "Grader",
      "Supervisor",
      "Official",
      "Candidate",
      "Team Personnel",
      "Team Admin",
    ],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/dashboard/assigner",
    name: "Assigner Dashboard",
    exact: true,
    element: AssignerDashboard,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/dashboard/admin",
    name: "Admin Dashboard",
    exact: true,
    element: AdminDashboard,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/dashboard/official",
    name: "Official Dashboard",
    exact: true,
    element: OfficialDashboard,
    roles: ["Admin", "Assigner", "Official"],
    isAnonymous: false,
  },
  {
    path: "/filemanager",
    name: "File Manager",
    exact: true,
    element: FileManager,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/dashboard/messages",
    name: "Messages",
    exact: true,
    element: Messages,
    roles: ["User", "Admin", "Grader", "Supervisor", "Official", "Assigner"],
    isAnonymous: false,
  },
];

const foulReport = [
  {
    path: "/foulreport/:gamereportid",
    name: "Foul Report",
    exact: true,
    element: FoulReport,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
];

const candidates = [
  {
    path: "/candidates",
    name: "Candidates",
    exact: true,
    element: Candidates,
    roles: ["Admin", "Assigner", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/candidates/new",
    name: "Candidates Form",
    element: CandidatesForm,
    exact: true,
    roles: ["Admin", "Grader", "Assigner", "Supervisor", "Candidate"],
    isAnonymous: false,
  },
  {
    path: "/dashboard/candidate",
    name: "Candidates Dashboard",
    element: CandidateDashboard,
    exact: true,
    roles: ["Admin", "Grader", "Assigner", "Supervisor", "Candidate"],
    isAnonymous: false,
  },
];

const certificationResults = [
  {
    path: "/certification/:id/results",
    name: "CertificationResults",
    exact: true,
    element: CertificationResults,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
];

const teams = [
  {
    path: "/teams",
    name: "Teams",
    exact: true,
    element: Teams,
    roles: ["Admin", "Assigner", "Official", "Team Admin"],
    isAnonymous: false,
  },
  {
    path: "/teams/new",
    name: "New Team Form",
    exact: true,
    element: NewTeamForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/teams/:teamId/members",
    name: "Team Members",
    exact: true,
    element: TeamMember,
    roles: ["Admin", "Team Personnel", "Team Admin"],
    isAnonymous: false,
  },
  {
    path: "/teams/:teamId/members/new",
    name: "Add New Member",
    exact: true,
    element: TeamMemberForm,
    roles: ["Admin", "Team Personnel", "Team Admin"],
    isAnonymous: false,
  },
  {
    path: "/crews/new",
    name: "CrewForm",
    exact: true,
    element: CrewForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/teams/:teamId/personnel",
    name: "Team Personnel Form",
    exact: true,
    element: TeamPersonnelForm,
    roles: [
      "User",
      "Assigner",
      "Admin",
      "Grader",
      "Supervisor",
      "Official",
      "Candidate",
      "Team Personnel",
      "Team Admin",
    ],
    isAnonymous: false,
  },
];

const teamPreviewRoute = [
  {
    path: "/teampreview/:id",
    name: "Team Preview",
    exact: true,
    element: TeamPreview,
    roles: [
      "Admin",
      "Assigner",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
      "Grader",
      "Candidate",
    ],
    isAnonymous: true,
  },
];

const assignmentRoute = [
  {
    path: "/conference/:conferenceId/game/:gameId",
    name: "Assignments",
    exact: true,
    element: Assignments,
    roles: ["Admin", "Official"],
    isAnonymous: false,
  },
  {
    path: "/assignment/form",
    name: "AssignmentForm",
    exact: true,
    element: AssignmentForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/assignments/current",
    name: "Approve/decline Assignment",
    element: GetCurrentAssignment,
    roles: ["Admin", "Official"],
    exact: true,
    isAnonymous: false,
  },
];

const tests = [
  {
    path: "/test/:id/detail",
    name: "Test Detail",
    exact: true,
    element: TestDetail,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/assign",
    name: "Assign Test ",
    exact: true,
    element: AssignTest,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/results/:id",
    name: "Test Results Instance",
    exact: true,
    element: TestResultsInstance,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/results",
    name: "Test Results",
    exact: true,
    element: TestResults,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/:testId/builder",
    name: "Test Builder",
    exact: true,
    element: TestBuilder,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/test/:id/preview",
    name: "Test Preview",
    exact: true,
    element: TestPreview,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/:id/current/result",

    name: "Grade Test Instance",
    exact: true,
    element: GradeTestInstance,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/test/:id/intake",
    name: "Test Preview",
    exact: true,
    element: TestTaking,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/tests",
    name: "Tests Paginated",
    exact: true,
    element: Tests,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },

  {
    path: "/tests/edit/:id",
    name: "Tests Edit Form",
    exact: true,
    element: TestForm,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/tests/new",
    name: "New Test Form",
    exact: true,
    element: TestForm,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/testanalytics",
    name: "Analytics Page",
    exact: true,
    element: TestAnalytics,
    roles: ["Admin", "Grader", "Supervisor", "Official", "Assigner"],
    isAnonymous: false,
  },
];

const stripeRoutes = [
  {
    path: "/success",
    name: "CheckoutSuccess",
    exact: true,
    element: CheckoutSuccess,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/testproducts",
    name: "TestProducts",
    exact: true,
    element: TestProducts,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/subscriptions",
    name: "StripeSubscription",
    exact: true,
    element: StripeSubscriptions,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/subscription",
    name: "SubscriptionSuccess",
    exact: true,
    element: SubscriptionSuccess,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/subscription/my-subscriptions",
    name: "MySubscriptionPage",
    exact: true,
    element: MySubscriptionPage,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
  {
    path: "/stripe/account",
    name: "ConnectedAccount",
    exact: true,
    element: ConnectedAccount,
    roles: ["Admin", "Grader", "Supervisor", "Official"],
    isAnonymous: false,
  },
  {
    path: "/stripe/chargeform",
    name: "ChargeForm",
    exact: true,
    element: StripeChargeForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/stripe/paymentsuccess",
    name: "paymentsuccess",
    exact: true,
    element: PaymentSuccessPage,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/stripe/transfer",
    name: "StripeTransfers",
    exact: true,
    element: StripeTransfers,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const conferenceRoute = [
  {
    path: "/conferences",
    name: "Conferences",
    exact: true,
    element: Conferences,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/conferences/new",
    name: "ConferencesForm",
    exact: true,
    element: ConferencesForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/conferences/:id/edit",
    name: "ConferencesForm",
    exact: true,
    element: ConferencesForm,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/videos/details",
    name: "trainingvideodetail",
    exact: true,
    element: TrainingVideoDetail,
    roles: [],
    isAnonymous: true,
  },
];

const errorRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: false,
  },
];

const faqs = [
  {
    path: "/faqs/faqform/:questionId",
    name: "faqform",
    element: FaqForm,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/faqs/faqform",
    name: "faqform",
    element: FaqForm,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/admin/faqs",
    name: "faqs",
    element: AdminFaq,
    roles: ["Admin", "Assigner", "Official", "Supervisor", "Grader"],
    exact: true,
    isAnonymous: false,
  },
];

const grades = [
  {
    path: "/grades",
    name: "Grades",
    exact: true,
    element: Grades,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const gameReports = [
  {
    path: "/games/reports",
    name: "Game Reports",
    element: GameReports,
    roles: ["User", "Admin", "Grader", "Supervisor", "Official", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/games/reports/new",
    name: "ReportFormHeader",
    exact: true,
    element: ReportFormHeader,
    roles: ["Admin", "Official", "Assigner", "Supervisor", "Grader"],
    isAnonymous: false,
  },
  {
    path: "/games/reports/:reportId",
    name: "ReportFormFouls",
    exact: true,
    element: ReportFormFouls,
    roles: ["Admin", "Official", "Assigner", "Supervisor", "Grader"],
    isAnonymous: false,
  },
  {
    path: "/games/:gameId/reports/replay",
    name: "ReplayReportForm",
    exact: true,
    element: GameReplayReport,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/replayreport/:gameId",
    name: "Replay Report Detailed",
    exact: true,
    element: ReplayReportDetailed,
    roles: ["User", "Admin", "Grader", "Supervisor"],
    isAnonymous: false,
  },
];

const games = [
  {
    path: "/games",
    name: "games",
    element: GamesTable,
    roles: ["Admin", "Assigner", "Official"],
    exact: true,
    isAnonymous: false,
  },
];

const venues = [
  {
    path: "/venues",
    name: "Venues",
    exact: true,
    element: Venue,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
  {
    path: "/venues/new",
    name: "New Venue",
    exact: true,
    element: AddVenue,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
  {
    path: "/games/new",
    name: "games",
    element: CreateNewGameForm,
    roles: ["Admin", "Assigner", "Official"],
    exact: true,
    isAnonymous: false,
  },
];

const adminRoutes = [
  {
    path: "/user/admin",
    name: "User",
    exact: true,
    element: User,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/admin/useradminview",
    name: "User",
    exact: true,
    element: User,
    roles: ["Admin"],
    isAnonymous: false,
  },
  {
    path: "/admin/designatepersonnel",
    name: "designatepersonnel",
    element: DesignatePersonnel,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
];

const officialsRoutes = [
  {
    path: "/officials",
    name: "Officials",
    exact: true,
    element: Officials,
    roles: ["Admin", "Assigner", "Official", "Team Admin"],
    isAnonymous: false,
  },
  {
    path: "/officials/new",
    name: "OfficialsForm",
    exact: true,
    element: OfficialsForm,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
  {
    path: "/officials/:officialId",
    name: "OfficialsForm",
    exact: true,
    element: OfficialsForm,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
  {
    path: "/officials/apparel",
    name: "OfficialsApparel",
    exact: true,
    element: ApparelList,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
];

const training = [
  {
    path: "/videos/add",
    name: "VideoForm",
    exact: true,
    element: VideoForm,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
];

const gradeFoulAnalytics = [
  {
    path: "/analytics/gradefoul",
    name: "Grade and Foul Analytics",
    element: GradeFoulAnalytics,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
];

const podcastForm = [
  {
    path: "/podcastForm",
    name: "PodcastForm",
    exact: true,
    element: PodcastForm,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    isAnonymous: false,
  },
];

const certifications = [
  {
    path: "/certifications",
    name: "Certifications",
    element: Certifications,
    exact: true,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/certifications/new",
    name: "Certifications Form",
    element: CertificationsForm,
    exact: true,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
  {
    path: "/certifications/:certificationId",
    name: "Certifications",
    element: CertificationsForm,
    exact: true,
    roles: ["Admin", "Assigner"],
    isAnonymous: false,
  },
];

const resources = [
  {
    path: "/resources/",
    name: "Resources",
    element: Resources,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/resources/new",
    name: "New Resource Form",
    element: ResourceForm,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },

  {
    path: "/resources/edit/:id",
    name: "Edit Resource",
    element: ResourceForm,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
];

const seasons = [
  {
    path: "/seasons",
    name: "Seasons",
    element: Seasons,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/seasons/new",
    name: "NewSeasonForm",
    element: NewSeasonForm,
    roles: ["Admin", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
];
const crews = [
  {
    path: "/crews/builder",
    name: "games",
    element: CrewDragNDrop,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/crews",
    name: "Crews",
    element: Crews,
    roles: [
      "Admin",
      "Official",
      "Game Day Personnel",
      "Team Personnel",
      "Supervisor",
    ],
    exact: true,
    isAnonymous: false,
  },
];

const userProfile = [
  {
    path: "/profile",
    name: "profile",
    element: ProfileNav,
    roles: [
      "User",
      "Admin",
      "Grader",
      "Supervisor",
      "Team Personnel",
      "Team Admin",
      "Official",
      "Game Day Personnel",
      "Team Admin",
    ],
    exact: true,
    isAnonymous: false,
  },
];

const announcements = [
  {
    path: "/announcements",
    name: "Announcements",
    exact: true,
    element: Announcement,
    roles: ["User", "Admin", "Grader", "Supervisor", "Team Admin"],
    isAnonymous: false,
    children: [
      {
        path: "/announcements/:id",
        name: "blogsingle",
        exact: true,
        element: BlogSingle,
        roles: ["User", "Admin", "Grader", "Supervisor", "Team Admin"],
        isAnonymous: false,
      },
    ],
  },
  {
    path: "/announcements/new",
    name: "Announcements",
    exact: true,
    element: AnnouncementForm,
    roles: ["User", "Admin", "Grader", "Supervisor", "Official"],
    isAnonymous: true,
  },
];
const officialsConflicts = [
  {
    path: "/officials/conflicts/form",
    name: "Officials Conflicts Form",
    element: OfficialsConflictsForm,
    roles: ["Admin", "Official", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/officials/conflicts/table",
    name: "Officials Conflicts Table",
    element: OfficialsConflictsTable,
    roles: ["Admin", "Official", "Assigner"],
    exact: true,
    isAnonymous: false,
  },
];
const pageTranslation = [
  {
    path: "/admin/translation",
    name: "Grade and Foul Analytics",
    element: PageTranslation,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/admin/translation/form",
    name: "translationForm",
    element: Translation,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/admin/translation/:id/form",
    name: "translationForm",
    element: Translation,
    roles: ["Admin"],
    exact: true,
    isAnonymous: false,
  },
];

const zoomMeeting = [
  {
    path: "/meetings/zoom",
    name: "zoom",
    element: ZoomMeeting,
    roles: [
      "User",
      "Assigner",
      "Admin",
      "Grader",
      "Supervisor",
      "Official",
      "Candidate",
      "Team Personnel",
      "Team Admin",
    ],
    exact: true,
    isAnonymous: false,
  },
];
const userMeetings = [
  {
    path: "/meetings/userMeetings",
    name: "userMeetings",
    element: UserMeetings,
    roles: [
      "User",
      "Assigner",
      "Admin",
      "Grader",
      "Supervisor",
      "Official",
      "Candidate",
      "Team Personnel",
      "Team Admin",
    ],
    roles: [
      "User",
      "Admin",
      "Grader",
      "Supervisor",
      "Team Personnel",
      "Team Admin",
    ],
    exact: true,
    isAnonymous: false,
  },
];
const newsletter = [
  {
    path: "/newsletter/admin",
    name: "subscription",
    element: NewslettersubscriptionAdmin,
    roles: ["Admin", "SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const locationForm = [
  {
    path: "/locations/form",
    name: "Location Form",
    element: Location,
    role: [],
    exact: true,
    isAnonymous: true,
  },
];

const allRoutes = [
  ...candidates,
  ...tests,
  ...assignmentRoute,
  ...dashboardRoutes,
  ...errorRoutes,
  ...venues,
  ...gradeFoulAnalytics,
  ...officialsRoutes,
  ...foulReport,
  ...teams,
  ...teamPreviewRoute,
  ...faqs,
  ...games,
  ...grades,
  ...gameReports,
  ...adminRoutes,
  ...certifications,
  ...conferenceRoute,
  ...stripeRoutes,
  ...officialsConflicts,
  ...userProfile,
  ...podcastForm,
  ...announcements,
  ...certificationResults,
  ...conferenceRoute,
  ...training,
  ...crews,
  ...zoomMeeting,
  ...resources,
  ...crews,
  ...pageTranslation,
  ...newsletter,
  ...seasons,
  ...userMeetings,
  ...locationForm,
];

export default allRoutes;
