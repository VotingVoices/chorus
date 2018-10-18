import * as React from 'react';
import { Dispatch } from 'redux';
import { connect} from 'react-redux';

import { IConnectedReduxProps, IQuestionnaireState, recordPrivacyPolicy } from '../store';

import '../App.css';
import './PrivacyPolicy.css';

interface IPropsFromDispatch {
    recordPrivacyPolicy: typeof recordPrivacyPolicy,
}

export class PrivacyPolicy extends React.Component<IConnectedReduxProps & IPropsFromDispatch, any> {
	public componentDidMount() {
		this.props.recordPrivacyPolicy();
	}
	
	public render() {
		return (
			<div className="privacy-policy VotingVoices-serif">
				<h1>Privacy Policy</h1>

				<p>Effective Date: <strong>October 17, 2018</strong></p>

				<p>Last Updated: <strong>October 17, 2018</strong></p>

				<p>Voting Voices (“<strong>VV</strong>”, “we”, or “us”) cares about your privacy.  We want you to understand how we collect, use, and share information about you when you use our website, mobile app, widget, and other online products, and services (collectively, the “Services”).</p>

				<p>The Services contain links to other websites or embedded widgets for your convenience and information.  We are not responsible for the privacy practices or the content of those sites or widgets.</p>

				<h2>What We Collect</h2>

				<h3>Information You Provide to Us</h3>

				<p>We collect information when you create your Vote Plan.   This may include your name, zip code, email, and phone number.  You may choose to provide other information directly to us. For example, we may collect information when you fill out a form, request support, or otherwise communicate with us.</p>

				<h3>Information We Collect Automatically</h3>

				<p>When you access or use our Services, we may also automatically collect information about you. This includes:</p>

				<p><em>Log and usage data.</em>  We may log information when you access and use the Services.  This may include your user-agent string, browser type, operating system, referral URLs, device information (e.g., device IDs), pages visited, links clicked, the requested URL, hardware settings, search terms and, etc.</p>

				<p><em>Information collected from cookies and similar technologies.</em>   We may receive information from cookies, which are pieces of data your browser stores and sends back to us when making requests, and similar technologies. We use this information to improve your experience, understand user activity, personalize content, and improve the quality of our Services.  Most web browsers are set to accept cookies by default.  If you prefer, you can usually choose to set your browser to remove or reject first- and third-party cookies.  Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.</p>

				<p><em>Location information.</em>  We may receive and process information about your location. We may also receive location information from you when you choose to share such information on our Services, including by associating your content with a location, or we may derive your approximate location from other information about you.</p>

				<h3>Information Collected from Other Sources</h3>

				<p><em>Linked services.</em>  If you authorize or link other services (e.g., third-party apps, widgets, or websites) to access the Services, <strong>VV</strong> receives information about your use of that service when it uses that authorization. Linking services may also cause the other service to send us information about your account with that service.</p>

				<p>Information collected from integrations.  We also may receive information about you, including log and usage data and cookie information, from third-party websites that integrate our Services, including our embeds and buttons. </p>

				<h3>How We Use Information About You</h3>

				<p>We use information about you to:</p>

				<ul>
					<li>Provide, maintain, and improve the Services;</li>
					<li>Research and develop new services;</li>
					<li>Help protect the safety of <strong>VV</strong> and our users, which includes blocking suspected spammers, addressing abuse, and enforcing and our other policies; and</li>
					<li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
				</ul>

				<p>Please note that personally identifiable information is used only to provide you with a more enjoyable, convenient online experience and to help us identify and/or provide information that may be of interest to you.  We do not sell or rent your data to other parties.  We may permit certain trusted third parties to track usage, analyze data such as the source address that a page request is coming from, your IP address or domain name, the date and time of the page request, the referring website (if any) and other parameters in the URL. This is collected in order to better understand our website usage, and enhance the performance of services to maintain and operate the Services and certain features on the Services. We may use third parties to host the Services; operate various features available on the Services; send you email; analyze data; provide search results and links and assist in fulfilling your orders. We may share information with vendors, consultants, and other service providers (but not with advertisers and ad partners) who need access to such information to carry out work for us.  The partner’s use of personal data will be subject to appropriate confidentiality and security measures.  We may share information among any of our parents, affiliates, subsidiaries, and other companies under common control and ownership. We may share information about you that has been aggregated or anonymized such that it cannot reasonably be used to identify you. For example, we may show the total number of times a question has been answered.</p>

				<p><strong>VV</strong> may disclose information in special cases where we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be violating our terms and conditions of use or may be causing injury or interference with our rights, property, our customers or anyone who could be harmed by such activities.</p>

				<p>We are not liable or responsible for personally identifiable or other information you choose to submit on any publicly accessible area of the Services.</p>

				<p>We offer social sharing features that let you share content or actions you take on our Services with other media. Your use of these features enables the sharing of certain information with your friends or the public, depending on the settings you establish with the third party that provides the social sharing feature. For more information about the purpose and scope of data collection and processing in connection with social sharing features, please visit the privacy policies of the third parties that provide these social sharing features (e.g., <a href="https://www.facebook.com/about/privacy/" target="_blank">Facebook</a>, or <a href="https://twitter.com/privacy" target="_blank">Twitter</a>).</p>

				<h2>How We Protect Your Information</h2>

				<p>We seek to protect personal information with reasonable organizational, technological and physical safeguards commensurate to the sensitivity of the personal information.   We take appropriate security measures to protect your information against unauthorized access to or unauthorized alteration, disclosure or destruction of data. To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we maintain appropriate physical, electronic, and managerial procedures to safeguard and secure the information and data stored on our system.  While no computer system is ever completely secure, we believe the measures we have implemented reduce the likelihood of security problems to a level appropriate to the type of data involved. We store the information we collect for as long as it is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.</p>

				<h2>Other Information</h2>

				<h3>Children</h3>

				<p>The Services are intended for United States of America voters who are at least 18 years old.  We do not knowingly collect or store any personal information from children except as permitted by applicable law.  </p>

				<h3>Disclaimer to Security</h3>

				<p>By consenting to the Privacy Policy, you consent that no data transmission over the Internet is completely secure. We cannot guarantee or warrant the security of any information you provide to us, and you transmit such information to us at your own risk.</p>

				<h3>Changes to The Privacy Policy</h3>

				<p>We may change the privacy policy from time to time. If we do, we will let you know by revising the date at the top of the policy. If we make a change to this policy that, in our sole discretion, is material, we will provide you with additional notice.  To the extent permitted under applicable law, by using our services after such notice, you consent to our updates to this policy.  We encourage you to periodically review this policy for the latest information on our privacy practices. </p>

				<p>We encourage you to review the Privacy Policy whenever you access or use our Services or otherwise interact with us to stay informed about our information practices and the ways you can help protect your privacy. By continuing to use our Services after Privacy Policy changes go into effect, you agree to be bound by the revised policy.</p>

				<h3>Contact Information</h3>

				<p>If you have any questions or concerns regarding this Privacy Policy, please contact our privacy officer at <a href="mailto:frank@votingvoices.org">frank@votingvoices.org</a>.</p>

			</div>
		);
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({ });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    recordPrivacyPolicy: () => dispatch(recordPrivacyPolicy()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);