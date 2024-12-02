import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/app/_themes/app.constant";

import { VideoPlayer } from "@/app/_components/widgets/video-player";

const styles = StyleSheet.create({
	category: {
		width: 80,
		height: 80,
		borderRadius: 15,
	},
	slide: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
	categoryImage: {
		width: SCREEN_WIDTH,
		height: 400,
		borderRadius: 10,
	},
});

export const onBoardingSlides: onBoardingSlidesTypes[] = [
	{
		id: "1",
		color: "rgba(0,0,0,0.9)",
		title: "اكتشف",
		resource: (
			<VideoPlayer height={SCREEN_HEIGHT} videoUri='composition' />
		),
		subTitle: "الابداع",
		description:
			"في رحلة البحث عن الابداع قد تضيع لوهلة من الزمن وحينها تجدنا",
	},
	{
		id: "2",
		color: "rgba(0,0,0,0.9)",
		title: "من دون",
		resource: <Image source='onboarding2' style={styles.slide} />,
		subTitle: "قيود",
		description: "نضع لك خطة بدون التزامات او قيود",
	},
	{
		id: "3",
		color: "rgba(0,0,0,0.9)",
		resource: <Image source='onboarding3' style={styles.slide} />,
		title: "نظام",
		subTitle: "متكامل",
		description: "ندعمك من جميع النواحي",
	},
];

export const categories: categoryTypes[] = [
	{
		id: "1",
		title: "Graphic Design",
		href: "/(routes)/(categories)/graphic_design",
		resource: <Image source='design_cat' style={styles.category} />,
	},
	{
		id: "2",
		title: "TVC",
		href: "/(routes)/(categories)/tvc",
		resource: <Image source='tvc_cat' style={styles.category} />,
	},
	{
		id: "3",
		title: "Printing",
		href: "/(routes)/(categories)/printing",
		resource: <Image source='printing_cat' style={styles.category} />,
	},
	{
		id: "4",
		title: "Reel",
		href: "/(routes)/(categories)/reel",
		resource: <Image source='reel_cat' style={styles.category} />,
	},
	{
		id: "5",
		title: "Copy Writing",
		href: "(routes)/(categories)/copy_writing",
		resource: <Image source='copy_cat' style={styles.category} />,
	},
	{
		id: "6",
		title: "Motion Graphic",
		href: "/(routes)/(categories)/motion_graphic",
		resource: <Image source='motion_cat' style={styles.category} />,
	},
	{
		id: "7",
		title: "Marketing",
		href: "/(routes)/(categories)/marketing",
		resource: <Image source='marketing_cat' style={styles.category} />,
	},
	{
		id: "8",
		title: "Website",
		href: "/(routes)/(categories)/web-apps",
		resource: <Image contentFit='cover' contentPosition='center'  source='web_cat' style={styles.category} />,
	},
	{
		id: "9",
		title: "Mobile App",
		href: "/(routes)/(categories)/mobile-apps",
		resource: <Image source='app_cat' style={styles.category} />,
	},
];

export const tvcCategory = {
	description: `قسم الإنتاج الفني في كوالتي تيم
يعتبر قسم الإنتاج الفني في كوالت ي تيم هو الجسر الذي يربط بين الإبداع والتطبيق العملي.
نحن نعمل على تحويل الأفكار الإبداعية إلى تجارب مرئية وسمعية مبهرة تعزز من الرسالة .التسويقية للعملاء
فريقنا من الخبراء في الإنتاج الفني يمتلك مهارات متنوعة تشمل التصوير الفوتوغرافي، الفيديو، المونتاج، و التصميم الصوتي. نحن نستخدم أحدث التقنيات والمعدات لضمان إنتاج
.محتوى بجودة عالية، سواء كان ذلك للإعلانات، الأفلام الترويجية، أو المحتوى الرقمي
نؤمن بأهمية التفاصيل في كل مرحلة من مراحل الإنتاج، من التخطيط إلى التنفيذ. دعونانساعدكم في تقديم أعمال فنية استث
نائية تجعل علامتكم التجارية تتألق وتترك انطباعًا قويًا في أذهان جمهوركم`,
	assets: {
		video: (
			<VideoPlayer
				height={SCREEN_HEIGHT / 2}
				videoUri='composition'
			/>
		),
		images: [
			<Image
				contentFit="cover"
				contentPosition="center"
				source='private_lecture'
				style={styles.categoryImage}
			/>,
			<Image
				contentFit="cover"
				contentPosition="center"
				source='hacking'
				style={styles.categoryImage}
			/>,
			<Image
				source='ipad'
				style={styles.categoryImage}
			/>,
			<Image
				source='tests_lecture'
				style={styles.categoryImage}
			/>,
			<Image
				source='youtube_lecture'
				style={styles.categoryImage}
			/>,
		],
	},
};

export const reelCategory = {
	description: `قسم الإنتاج الفني في كوالتي تيم
يعتبر قسم الإنتاج الفني في كوالت ي تيم هو الجسر الذي يربط بين الإبداع والتطبيق العملي.
نحن نعمل على تحويل الأفكار الإبداعية إلى تجارب مرئية وسمعية مبهرة تعزز من الرسالة .التسويقية للعملاء
فريقنا من الخبراء في الإنتاج الفني يمتلك مهارات متنوعة تشمل التصوير الفوتوغرافي، الفيديو، المونتاج، و التصميم الصوتي. نحن نستخدم أحدث التقنيات والمعدات لضمان إنتاج
.محتوى بجودة عالية، سواء كان ذلك للإعلانات، الأفلام الترويجية، أو المحتوى الرقمي
نؤمن بأهمية التفاصيل في كل مرحلة من مراحل الإنتاج، من التخطيط إلى التنفيذ. دعونانساعدكم في تقديم أعمال فنية استث
نائية تجعل علامتكم التجارية تتألق وتترك انطباعًا قويًا في أذهان جمهوركم`,
	assets: {
		video: (
			<VideoPlayer
				height={SCREEN_HEIGHT / 2}
				videoUri='composition'
			/>
		),
		images: [
			<Image
				contentFit="cover"
				contentPosition="center"
				source='private_lecture'
				style={styles.categoryImage}
			/>,
			<Image
				contentFit="cover"
				contentPosition="center"
				source='hacking'
				style={styles.categoryImage}
			/>,
			<Image
				source='ipad'
				style={styles.categoryImage}
			/>,
			<Image
				source='tests_lecture'
				style={styles.categoryImage}
			/>,
			<Image
				source='youtube_lecture'
				style={styles.categoryImage}
			/>,
		],
	},
};

export const graphicDesignCategory = {
	description: `قسم التصميم في كوالتي تيم
في كوالتي تيم، نعتبر التصميم جزءًا أساسيًا من تجربة العميل والتواصل الفعال مع الجمهور.
يهدف قسم التصميم لدينا إلى خلق تصاميم مبتكرة وجذابة تعكس هوية العلامة التجارية وتبرز .رسالتها فريقنا يت
كون من مصممين مبدعين يمتلكون خبرة في مجالات متعددة، بما في ذلك تصميم
(UI) الهوية البصرية، والتصميم الجرافيكي، وتصميم واجهات المستخدم وتجربة المستخدم (UX).
نحن نعمل بشكل وثيق مع عملائنا لفهم رؤيتهم وأهدافهم، مما يساعدنا على تطوير تصاميم مخصصة تلبي احتياجاته
.م وتعزز تفاعل الجمهوردعونا. نحن نؤمن بأن التصميم الجيد لا يتعلق فقط بالجمال، بل يتطلب أيضًا وظيفة وفاعلية
نساعدكم في تحويل أفكاركم إلى تصاميم مميزة تأسر الأنظار وتحقق نتائج ملموسة`,
	assets: {
		images: [
			<Image
				contentFit="cover"
				contentPosition="center"
				source='auto_chicken'
				style={styles.categoryImage}
			/>,
			<Image
				contentFit="cover"
				contentPosition="center"
				source='dar_ala3rajy'
				style={styles.categoryImage}
			/>,
			<Image source='english_school' style={styles.categoryImage} />,
			<Image source='muhanad_alsudani' style={styles.categoryImage} />,
			<Image source='global_degree' style={styles.categoryImage} />,
			<Image source='tareeq_alsultan' style={styles.categoryImage} />,
			<Image source='high_class' style={styles.categoryImage} />,
		],
	},
};

export const motionGraphicCategory = {
	description: `قسم الإنتاج الفني في كوالتي تيم
يعتبر قسم الإنتاج الفني في كوالتي تيم هو الجسر الذي يربط بين الإبداع والتطبيق العملي.
نحن نعمل على تحويل الأفكار الإبداعية إلى تجارب مرئية وسمعية مبهرة تعزز من الرسالة .التسويقية للعملاء
فريقنا من الخبراء في الإنتاج الفني يمتلك مهارات متنوعة تشمل التصوير الفوتوغرافي، الفيديو، المونتاج،
التصميم الصوتي. نحن نستخدم أحدث التقنيات والمعدات لضمان إنتاج
.محتوى بجودة عالية، سواء كان ذلك للإعلانات، الأفلام الترويجية، أو المحتوى الرقمي
نؤمن بأهمية التفاصيل في كل مرحلة من مراحل الإنتاج، من التخطيط إلى التنفيذ. دعونا نساعدكم في تقديم أعمال فنية استث نائية تجعل علامتكم التجارية تتألق وتترك انطباعًا قويًا في أذهان جمهوركم`,
	assets: {
		images: [
			<Image
				contentFit="cover"
				contentPosition="center"
				source='iphone_3d'
				style={styles.categoryImage}
			/>,
			<Image
				contentFit="cover"
				contentPosition="center"
				source='joystick_3d'
				style={styles.categoryImage}
			/>,
			<Image
				source='monitor_3d'
				style={styles.categoryImage}
			/>,
			<Image
				source='stage_3d'
				style={styles.categoryImage}
			/>,
			<Image
				source='vr_3d'
				style={styles.categoryImage}
			/>,
		],
	},
};

export const copyWritingCategory = {
	description: `قسم كتابة المحتوى في كوالتي تيم
في كوالتي تيم، نؤمن بأن المحتوى الجيد هو أساس نجاح أي استراتيجية تسويقية. يقدم قسم
كتابة المحتوى لدينا مجموعة متنوعة من الخدمات، تشمل كتابة المقالات، التدوينات، المحتوى الإبداعي، والنصوص
الإعلانية، مما يساعد عملائنا على تعزيز تواجدهم الرقمي وجذب .جمهورهم المستهدف
فريقنا من الكتاب المحترفين يمتلك خبرة واسعة في مختلف المجالات، ويعمل بتعاون وثيق مع
العملاء لفهم رؤاهم وأهدافهم. نستخدم أساليب مدروسة لكتابة محتوى مخصص، يجمع بين الإبداع والدقة، م .ما يضمن تحقيق نتائج ملموسة
دعونا نساعدكم في إيصال رسالتكم بشكل فعال وجذاب، وتحقيق النجاح الذي تستحقونه`,
	assets: {
		headerImage: (
			<Image
				source='planing'
				style={styles.categoryImage}
			/>
		),
		images: [
			<Image
				source='presenting'
				style={styles.categoryImage}
			/>,
			<Image
				source='writing_plan'
				style={styles.categoryImage}
			/>,
		],
	},
};

export const marketingCategory = {
	description: `قسم التسويق في كوالتي تيم
يعتبر قسم التسويق في كوالتي تيم هو المحرك الأساسي الذي يقود نجاح استراتيجياتنا
التسويقية. نحن نقدم حلول تسويقية شاملة تهدف إلى تعزيز العلامة التجارية وزيادة الوعي
.بها، وتحقيق نتائج ملموسة عبر مختلف القنوات الرقمية
فريقنا يتكون من خبراء في التسويق الرقمي، وتحليل البيانات، والتسويق عبر وسائل التواصل
(SEO) الاجتماعي، وتحسين محركات البحث.(PPC)، وإعلانات الدفع لكل نقرة نحن
نعمل بجد لتطوير استراتيجيات مخصصة تناسب احتياجات كل عميل، ونسعى دائمًا لتحقيق .الأهداف المحددة بكفاءة وفعالية في
كوالتي تيم، نؤمن بأن التسويق الناجح يعتمد على الابتكار والتحليل الدقيق. دعونا نساعدكم
في تحويل رؤيتكم إلى واقع، والوصول إلى جمهوركم بشكل أكثر فعالية`,
	assets: {
		headerImage: (
			<Image
				source='stats_1'
				style={styles.categoryImage}
			/>
		),
		images: [
			<Image
				source='stats_2'
				style={styles.categoryImage}
			/>,
			<Image
				source='stats_3'
				style={styles.categoryImage}
			/>,
			<Image
				source='stats_4'
				style={styles.categoryImage}
			/>,
		],
	},
};
export const pringtingCategory = {
	description: `قسم الطباعة في كوالتي تيم
يعتبر قسم الطباعة في كوالتي تيم جزءًا حيويًا من خدماتنا المتكاملة، حيث نقدم حلول طباعة
حترافية تلبي احتياجات جميع عملائنا. نحن نؤمن بأن جودة الطباعة تعكس احترافية العلامة
.التجارية وتساهم في تحقيق انطباع إيجابي دائم
فريقنا يتألف من متخصصين في تقنيات الطباعة الحديثة، ونسعى لتقديم مجموعة واسعة من
الخدمات تشمل طباعة المواد التسويقية، الكتيبات، البروشورات، بطاقات العمل، والمطبوعات
الخاصة. نحن نستخدم مواد عالية الجودة وأحدث التقنيات لضمان نتائج مبهرة تلبي توقعات عملائنا
نحن ملتزمون بتحقيق رضا عملائنا من خلال تقديم خدمة سريعة وموثوقة، مع التركيز على
التفاصيل الدقيقة. دعونا نساعدكم في تجسيد أفكاركم
من خلال طباعة متميزة تعزز من هوية علامتكم التجارية`,
	assets: {
		headerImage: (
			<Image
				source='planing'
				style={styles.categoryImage}
			/>
		),
		images: [
			<Image
				source='presenting'
				style={styles.categoryImage}
			/>,
			<Image
				source='writing_plan'
				style={styles.categoryImage}
			/>,
		],
	},
};
export const mobileAppsCategory = {
	description: `قسم إنشاء التطبيقات في كوالتي تيم
في كوالتي تيم، نفخر بتقديم خدمات متكاملة في مجال إنشاء التطبيقات، حيث نساعد عملائنا
على تطوير تطبيقات مبتكرة وفعالة تلبي احتياجاتهم وتعزز من تجربة المستخدم. نحن نؤمن بأن التطبيقات الجيدة تمث
ل جسر ً ا بين العلامة التجارية والجمهور، وتساهم في تحقيق الأهداف .التجارية
فريقنا يتكون من مطورين محترفين ومصممين ذوي خبرة، يعملون بتعاون وثيق لتحويل
الأفكار إلى تطبيقات عملية وسهلة الاستخدام. نحن نستخدم أحدث التقنيات
 ومنهجيات التطوير لضمان تسليم مشاري .ع عالية الجودة في الوقت المحدد
سواء كنت تبحث عن تطبيقات للأجهزة المحمولة أو تطبيقات ويب، نحن هنا لنقدم لك حلولاً
مخصصة تعكس هوية علامتك التجارية وتلبي متطلبات السوق. دعونا نساعدكم في بناء
تطبيق يحقق قيمة حقيقية لعملائكم ويساهم في نجاح أعمالكم`,
	assets: {
		headerImage: (
			<Image
				source='planing'
				style={styles.categoryImage}
			/>
		),
		images: [
			<Image
				source='presenting'
				style={styles.categoryImage}
			/>,
			<Image
				source='writing_plan'
				style={styles.categoryImage}
			/>,
		],
	},
};
export const webAppsCategory = {
	description: `قسم تصميم وتطوير المواقع الإلكترونية
ويب سايت " "
في كوالتي تيم
يعد قسم تصميم وتطوير المواقع الإلكترونية في كوالتي تيم ركيزة أساسية في استراتيجياتنا
الرقمية، حيث نقدم حلولا ً مخصصة تلبي احتياجا
ت عملائنا وتساهم في تعزيز تواجدهم على
الإنترنت. نحن نؤمن بأن الموقع الإلكتروني هو واجهة العلامة التجارية، ويجب أن يعكس
.هوية الشركة ويوفر تجربة مستخدم متميزة
فريقنا من المطورين والمصممين المبدعين يتمتع بخبرة واسعة في إنشاء مواقع متجاوبة
وسهلة الاستخدام، سو
اء كانت مواقع تجارية، مدونات، أو منصات إلكترونية معقدة. نحن
نستخدم أحدث التقنيات وأفضل الممارسات في تصميم واجهات المستخدم وتجربة المستخدم .لضمان تحقيق أفضل أداء للموقع
نحن نهتم بكل تفاصيل المشروع، من التخطيط الأولي إلى التنفيذ النهائي، ونتأكد من أن كل
.(SEO) موقع يتميز بالسرعة والأمان والتوافق مع محركات البحث
دعونا نساعدكم في إنشاء موقع إلكتروني يبرز علامتكم التجارية ويحقق أهدافكم التجارية بكفاءة`,
	assets: {
		headerImage: (
			<Image
				source='4th_dim'
				style={styles.categoryImage}
			/>
		),
		images: [
			<Image
				source='masakin_website_features'
				style={styles.categoryImage}
			/>,
			<Image
				source='masakin_website_hero'
				style={styles.categoryImage}
			/>,
			<Image
				source='masakin_website_list'
				style={styles.categoryImage}
			/>,
			<Image
				source='masakin_website_bands'
				style={styles.categoryImage}
			/>,
			<Image
				source='masakin_website_card'
				style={styles.categoryImage}
			/>,
			<Image
				source='masakin_website_services'
				style={styles.categoryImage}
			/>,
		],
	},
};
