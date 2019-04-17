const findJobs = (jobs, keywordArr) => {
    let sdArr = jobs
        .filter(job => keywordArr
            .some(keyword => job.jobTitle.toLowerCase().includes(keyword))
        ).map(job => job.sd.trim())

    sdArr = [...new Set(sdArr)].sort();

    return sdArr.length > 0 ? sdArr.join(', ') : null;
}

export const generateEmail = (jobs) => {
    const agricultureJobs = findJobs(jobs, ['agriculture']);
    const artJobs = findJobs(jobs, ['art teacher']);
    const autisticJobs = findJobs(jobs, ['autistic']);
    const behaviorSpecJobs = findJobs(jobs, ['behavior']);
    const bioJobs = findJobs(jobs, ['biology']);
    const businessJobs = findJobs(jobs, ['business']);
    const chemJobs = findJobs(jobs, ['chemistry']);
    const chineseJobs = findJobs(jobs, ['chinese']);
    const compSciJobs = findJobs(jobs, ['computer science']);
    const earlyChildJobs = findJobs(jobs, ['early childhood']);
    const elemJobs = findJobs(jobs, ['elementary teach', 'first grade teach', 'second grade teach', 'third grade teach', 'fourth grade teach', 'fifth grade teach', '1st grade teach', '2nd grade teach', '3rd grade teach', '4th grade teach', '5th grade teach', 'grade 1 teach', 'grade 2 teach', 'grade 3 teach', 'grade 4 teach', 'grade 5 teach', 'Elementary - various buildings', 'Elementary Summer School-Teachers', 'elementary substitute teacher', 'Grade 5 Elementary']);
    const emoSupJobs = findJobs(jobs, ['emotional support']);
    const engJobs = findJobs(jobs, ['english teacher']);
    const eslJobs = findJobs(jobs, ['esl']);
    const famConJobs = findJobs(jobs, ['consumer science']);
    const foreignLangJobs = findJobs(jobs, ['foreign lang']);
    const frenchJobs = findJobs(jobs, ['french']);
    const germanJobs = findJobs(jobs, ['german']);
    const giftedJobs = findJobs(jobs, ['gifted']);
    const guidanceJobs = findJobs(jobs, ['guidance']);
    const healthJobs = findJobs(jobs, ['health']);
    const latinJobs = findJobs(jobs, ['latin']);
    const langArtsJobs = findJobs(jobs, ['language arts']);
    const learnSupJobs = findJobs(jobs, ['learning support']);
    const librarianJobs = findJobs(jobs, ['librarian']);
    const lifeSkillsJobs = findJobs(jobs, ['life skills']);
    const mathJobs = findJobs(jobs, ['math']);
    const musicJobs = findJobs(jobs, ['music', 'choral teach', 'band teach', 'chorus teach', 'vocal']);
    const occTheraJobs = findJobs(jobs, ['occupational therapy']);
    const physEdJobs = findJobs(jobs, ['physical education', 'phys ed']);
    const physicsJobs = findJobs(jobs, ['physics']);
    const principalJobs = findJobs(jobs, ['principal']);
    const psychJobs = findJobs(jobs, ['psychologist']);
    const readingJobs = findJobs(jobs, ['reading specialist']);
    const scienceJobs = findJobs(jobs, ['science teach']);
    const socialStudiesJobs = findJobs(jobs, ['social studies', 'history']);
    const spanishJobs = findJobs(jobs, ['spanish']);
    const specEdJobs = findJobs(jobs, ['special ed']);
    const speechJobs = findJobs(jobs, ['speech and language', 'speech & language']);
    const techJobs = findJobs(jobs, ['technology teacher', 'technology instructor', 'technology ed']);

    const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<!-- NAME: 1 COLUMN -->
		<!--[if gte mso 15]>
		<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG/>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<title>*|MC:SUBJECT|*</title>
        
    <style type="text/css">
		p{
			margin:10px 0;
			padding:0;
		}
		table{
			border-collapse:collapse;
		}
		h1,h2,h3,h4,h5,h6{
			display:block;
			margin:0;
			padding:0;
		}
		img,a img{
			border:0;
			height:auto;
			outline:none;
			text-decoration:none;
		}
		body,#bodyTable,#bodyCell{
			height:100%;
			margin:0;
			padding:0;
			width:100%;
		}
		#outlook a{
			padding:0;
		}
		img{
			-ms-interpolation-mode:bicubic;
		}
		table{
			mso-table-lspace:0pt;
			mso-table-rspace:0pt;
		}
		.ReadMsgBody{
			width:100%;
		}
		.ExternalClass{
			width:100%;
		}
		p,a,li,td,blockquote{
			mso-line-height-rule:exactly;
		}
		a[href^=tel],a[href^=sms]{
			color:inherit;
			cursor:default;
			text-decoration:none;
		}
		p,a,li,td,body,table,blockquote{
			-ms-text-size-adjust:100%;
			-webkit-text-size-adjust:100%;
		}
		.ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
			line-height:100%;
		}
		a[x-apple-data-detectors]{
			color:inherit !important;
			text-decoration:none !important;
			font-size:inherit !important;
			font-family:inherit !important;
			font-weight:inherit !important;
			line-height:inherit !important;
		}
		#bodyCell{
			padding:10px;
		}
		.templateContainer{
			max-width:600px !important;
		}
		a.mcnButton{
			display:block;
		}
		.mcnImage{
			vertical-align:bottom;
		}
		.mcnTextContent{
			word-break:break-word;
		}
		.mcnTextContent img{
			height:auto !important;
		}
		.mcnDividerBlock{
			table-layout:fixed !important;
		}
	/*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
		body,#bodyTable{
			/*@editable*/background-color:#BBBBBB;
		}
	/*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
		#bodyCell{
			/*@editable*/border-top:0;
		}
	/*
	@tab Page
	@section Email Border
	@tip Set the border for your email.
	*/
		.templateContainer{
			/*@editable*/border:0;
		}
	/*
	@tab Page
	@section Heading 1
	@tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
	@style heading 1
	*/
		h1{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:26px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 2
	@tip Set the styling for all second-level headings in your emails.
	@style heading 2
	*/
		h2{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:22px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 3
	@tip Set the styling for all third-level headings in your emails.
	@style heading 3
	*/
		h3{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:20px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Page
	@section Heading 4
	@tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
	@style heading 4
	*/
		h4{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:18px;
			/*@editable*/font-style:normal;
			/*@editable*/font-weight:bold;
			/*@editable*/line-height:125%;
			/*@editable*/letter-spacing:normal;
			/*@editable*/text-align:left;
		}
	/*
	@tab Preheader
	@section Preheader Style
	@tip Set the background color and borders for your email's preheader area.
	*/
		#templatePreheader{
			/*@editable*/background-color:#333333;
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
			/*@editable*/padding-top:3px;
			/*@editable*/padding-bottom:3px;
		}
	/*
	@tab Preheader
	@section Preheader Text
	@tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
	*/
		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
			/*@editable*/color:#ffffff;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:14px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:center;
		}
	/*
	@tab Preheader
	@section Preheader Link
	@tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
	*/
		#templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
			/*@editable*/color:#ffffff;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:none;
		}
	/*
	@tab Header
	@section Header Style
	@tip Set the background color and borders for your email's header area.
	*/
		#templateHeader{
			/*@editable*/background-color:#fff;
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
			/*@editable*/padding-top:0px;
			/*@editable*/padding-bottom:0;
		}
	/*
	@tab Header
	@section Header Text
	@tip Set the styling for your email's header text. Choose a size and color that is easy to read.
	*/
		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:16px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:left;
		}
	/*
	@tab Header
	@section Header Link
	@tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
	*/
		#templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
			/*@editable*/color:#FF8A2B;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:none;
		}
	/*
	@tab Body
	@section Body Style
	@tip Set the background color and borders for your email's body area.
	*/
		#templateBody{
			/*@editable*/background-color:#FFFFFF;
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:2px solid #EAEAEA;
			/*@editable*/padding-top:0;
			/*@editable*/padding-bottom:9px;
		}
	/*
	@tab Body
	@section Body Text
	@tip Set the styling for your email's body text. Choose a size and color that is easy to read.
	*/
		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
			/*@editable*/color:#202020;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:16px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:left;
		}
	/*
	@tab Body
	@section Body Link
	@tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
	*/
		#templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
			/*@editable*/color:#FF8A2B;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:none;
		}
	/*
	@tab Footer
	@section Footer Style
	@tip Set the background color and borders for your email's footer area.
	*/
		#templateFooter{
			/*@editable*/background-color:#FAFAFA;
			/*@editable*/border-top:0;
			/*@editable*/border-bottom:0;
			/*@editable*/padding-top:9px;
			/*@editable*/padding-bottom:9px;
		}
	/*
	@tab Footer
	@section Footer Text
	@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
	*/
		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
			/*@editable*/color:#656565;
			/*@editable*/font-family:Helvetica;
			/*@editable*/font-size:12px;
			/*@editable*/line-height:150%;
			/*@editable*/text-align:center;
		}
	/*
	@tab Footer
	@section Footer Link
	@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
	*/
		#templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
			/*@editable*/color:#656565;
			/*@editable*/font-weight:normal;
			/*@editable*/text-decoration:underline;
		}
	@media only screen and (min-width:768px){
		.templateContainer{
			width:600px !important;
		}

}	@media only screen and (max-width: 480px){
		body,table,td,p,a,li,blockquote{
			-webkit-text-size-adjust:none !important;
		}

}	@media only screen and (max-width: 480px){
		body{
			width:100% !important;
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		#bodyCell{
			padding-top:10px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImage{
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCaptionTopContent,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer{
			max-width:100% !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnBoxedTextContentContainer{
			min-width:100% !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupContent{
			padding:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
			padding-top:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardTopImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
			padding-top:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardBottomImageContent{
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockInner{
			padding-top:0 !important;
			padding-bottom:0 !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageGroupBlockOuter{
			padding-top:9px !important;
			padding-bottom:9px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnTextContent,.mcnBoxedTextContentColumn{
			padding-right:18px !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
			padding-right:18px !important;
			padding-bottom:0 !important;
			padding-left:18px !important;
		}

}	@media only screen and (max-width: 480px){
		.mcpreview-image-uploader{
			display:none !important;
			width:100% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 1
	@tip Make the first-level headings larger in size for better readability on small screens.
	*/
		h1{
			/*@editable*/font-size:22px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 2
	@tip Make the second-level headings larger in size for better readability on small screens.
	*/
		h2{
			/*@editable*/font-size:20px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 3
	@tip Make the third-level headings larger in size for better readability on small screens.
	*/
		h3{
			/*@editable*/font-size:18px !important;
			/*@editable*/line-height:125% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Heading 4
	@tip Make the fourth-level headings larger in size for better readability on small screens.
	*/
		h4{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Boxed Text
	@tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
		.mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
			/*@editable*/font-size:14px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Preheader Visibility
	@tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
	*/
		#templatePreheader{
			/*@editable*/display:block !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Preheader Text
	@tip Make the preheader text larger in size for better readability on small screens.
	*/
		#templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
			/*@editable*/font-size:14px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Header Text
	@tip Make the header text larger in size for better readability on small screens.
	*/
		#templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Body Text
	@tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
		#templateBody .mcnTextContent,#templateBody .mcnTextContent p{
			/*@editable*/font-size:16px !important;
			/*@editable*/line-height:150% !important;
		}

}	@media only screen and (max-width: 480px){
	/*
	@tab Mobile Styles
	@section Footer Text
	@tip Make the footer content text larger in size for better readability on small screens.
	*/
		#templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
			/*@editable*/font-size:14px !important;
			/*@editable*/line-height:150% !important;
		}

}</style></head>
    <body>
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="164%" id="bodyTable">
                <tr>
                    <td align="center" valign="top" id="bodyCell">
                        <!-- BEGIN TEMPLATE // -->
						<!--[if gte mso 9]>
						<table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
						<tr>
						<td align="center" valign="top" width="600" style="width:600px;">
						<![endif]-->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="background-color:#fff;">
                            <tr style="background-color:#fff;">
                                <td valign="top" id="templatePreheader" style="background-color:#201B1B;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner">
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">
                        
                            <font color="#ffffff">This week's new teaching jobs.</font>
                        </td>
                    </tr>
                </tbody></table>
                
                <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                        
                            <a href="*|ARCHIVE|*" target="_blank" style="color:#fff;text-decoration:none;">View this email in your browser</a>
                        </td>
                    </tr>
                </tbody></table>
                
            </td>
        </tr>
    </tbody>
</table></td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateHeader"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    <a href="https://www.teachercatapult.com/teaching-jobs-in-pa/" title="" class="" target="_blank">
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/bda88dde6351939572b55c93d/images/90bc6c91-5e91-45a9-849b-bbf896a9a616.png" width="600" style="max-width:600px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    </a>
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateBody" style="background-color:#FFFFFF;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner">
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                        ${agricultureJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                                                                style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=agriculture"
                                                                                                    target="_blank">Agriculture Teacher Job${agricultureJobs.includes(',') ? 's' : ''}:</a></strong></span></span></p>
                                                                                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                                                                style="font-family:arial,helvetica,sans-serif; line-height:18px">${agricultureJobs}</span></span></p>`
            :
            ``
        }  
                                                                    ${artJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=art%20teacher"
                                                        target="_blank">Art Teacher Job${artJobs.includes(',') ? 's' : ''}:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${artJobs}</span></span></p>`
            :
            ``
        }
                        ${autisticJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=autistic"
                                                        target="_blank">Autistic Teacher Job${autisticJobs.includes(',') ? 's' : ''}:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${autisticJobs}</span></span></p>`
            :
            ``
        }
        ${bioJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=biology"
                                                        target="_blank">Biology Teacher Job${bioJobs.includes(',') ? 's' : ''}:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${bioJobs}</span></span></p>`
            :
            ``
        }
                        ${behaviorSpecJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=behavior"
                                                        target="_blank">Behavior Specialist Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${behaviorSpecJobs}</span></span></p>`
            :
            ``
        }
                        ${businessJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=business"
                                                        target="_blank">Business Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${businessJobs}</span></span></p>`
            :
            ``
        }
        ${chemJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=chemistry"
                                                        target="_blank">Chemistry Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${chemJobs}</span></span></p>`
            :
            ``
        }
                        ${chineseJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=chinese"
                                                        target="_blank">Chinese Language Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${chineseJobs}</span></span></p>`
            :
            ``
        }
                        ${compSciJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=computer%20science"
                                                        target="_blank">Computer Science Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${compSciJobs}</span></span></p>`
            :
            ``
        }
                        ${earlyChildJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=early%20childhood"
                                                        target="_blank">Early Childhood Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${earlyChildJobs}</span></span></p>`
            :
            ``
        }
                        ${elemJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa"
                                                        target="_blank">Elementary Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${elemJobs}</span></span></p>`
            :
            ``
        }
                        ${emoSupJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=emotional%20support"
                                                        target="_blank">Emotional Support Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${emoSupJobs}</span></span></p>`
            :
            ``
        }
                        ${engJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=english%20teacher"
                                                        target="_blank">English Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${engJobs}</span></span></p>`
            :
            ``
        }
                        ${eslJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=esl"
                                                        target="_blank">ESL Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${eslJobs}</span></span></p>`
            :
            ``
        }
                        ${famConJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=consumer%20science"
                                                        target="_blank">Family and Consumer Science Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${famConJobs}</span></span></p>`
            :
            ``
        }
                        ${foreignLangJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=foreign%20language"
                                                        target="_blank">Foreign Language Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${foreignLangJobs}</span></span></p>`
            :
            ``
        }
                        ${frenchJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=french"
                                                        target="_blank">French Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${frenchJobs}</span></span></p>`
            :
            ``
        }
                        ${germanJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=german"
                                                        target="_blank">German Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${germanJobs}</span></span></p>`
            :
            ``
        }
                        ${giftedJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=gifted"
                                                        target="_blank">Gifted Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${giftedJobs}</span></span></p>`
            :
            ``
        }
                        ${guidanceJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=guidance"
                                                        target="_blank">Guidance Counselor Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${guidanceJobs}</span></span></p>`
            :
            ``
        }
                        ${healthJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=health"
                                                        target="_blank">Health Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${healthJobs}</span></span></p>`
            :
            ``
        }
                        ${latinJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=latin"
                                                        target="_blank">Latin Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${latinJobs}</span></span></p>`
            :
            ``
        }
                        ${langArtsJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=language%20arts"
                                                        target="_blank">Language Arts Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${langArtsJobs}</span></span></p>`
            :
            ``
        }
                        ${learnSupJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=learning%20support"
                                                        target="_blank">Learning Support Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${learnSupJobs}</span></span></p>`
            :
            ``
        }
                        ${librarianJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=librarian"
                                                        target="_blank">Librarian Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${librarianJobs}</span></span></p>`
            :
            ``
        }
                        ${lifeSkillsJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=life%20skills"
                                                        target="_blank">Life Skills Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${lifeSkillsJobs}</span></span></p>`
            :
            ``
        }
                        ${mathJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=math"
                                                        target="_blank">Math Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${mathJobs}</span></span></p>`
            :
            ``
        }
                        ${musicJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=music"
                                                        target="_blank">Music Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${musicJobs}</span></span></p>`
            :
            ``
        }
                        ${occTheraJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=occupational%20therapy"
                                                        target="_blank">Occupational Therapist Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${occTheraJobs}</span></span></p>`
            :
            ``
        }
                        ${physEdJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=physical%20education"
                                                        target="_blank">Physical Education Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${physEdJobs}</span></span></p>`
            :
            ``
        }
        ${physicsJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=physics"
                                                        target="_blank">Physics Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${physicsJobs}</span></span></p>`
            :
            ``
        }
        ${principalJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=principal"
                                                        target="_blank">Principal Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${principalJobs}</span></span></p>`
            :
            ``
        }
                        ${psychJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=psychologist"
                                                        target="_blank">Psychologist Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${psychJobs}</span></span></p>`
            :
            ``
        }
                        ${readingJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=reading%20specialist"
                                                        target="_blank">Reading Specialist Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${readingJobs}</span></span></p>`
            :
            ``
        }
                        ${scienceJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=science%20teacher"
                                                        target="_blank">Science Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${scienceJobs}</span></span></p>`
            :
            ``
        }
                        ${socialStudiesJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=social%20studies"
                                                        target="_blank">Social Studies Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${socialStudiesJobs}</span></span></p>`
            :
            ``
        }
                        ${spanishJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=spanish"
                                                        target="_blank">Spanish Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${spanishJobs}</span></span></p>`
            :
            ``
        }
                        ${specEdJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?text=special%20ed"
                                                        target="_blank">Special Ed Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${specEdJobs}</span></span></p>`
            :
            ``
        }
                        ${speechJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?speech%20and%20language"
                                                        target="_blank">Speech and Language Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${speechJobs}</span></span></p>`
            :
            ``
        }
                        ${techJobs ?
            `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                                    style="color: #FF8A2B;"><strong><a href="https://www.teachercatapult.com/teaching-jobs-in-pa?technology%20teacher"
                                                        target="_blank">Technology Teacher Jobs:</a></strong></span></span></p>
                                                    <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                                    style="font-family:arial,helvetica,sans-serif; line-height:18px">${techJobs}</span></span></p>`
            :
            ``
        }
</td>
                    </tr>
                </tbody></table>
                
            </td>
        </tr>
    </tbody>
</table></td>
                            </tr>
                            <tr>
                                <td valign="top" id="templateFooter"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnShareBlock" style="min-width:100%;">
    <tbody class="mcnShareBlockOuter">
            <tr>
                <td valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareBlockInner">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnShareContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td align="center" style="padding-top: 0;padding-left: 9px;padding-bottom: 0;padding-right: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContent">
                <tbody><tr>
                    <td align="center" valign="top" class="mcnShareContentItemContainer" style="padding-top: 9px;padding-right: 9px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <tbody><tr>
                                <td align="left" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <!--[if mso]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                    <![endif]-->
                                    
                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody><tr>
                                                <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContentItemContainer">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="" class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody><tr>
                                                            <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody><tr>
                                                                        <td align="center" valign="middle" width="24" class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Feepurl.com%2FgjLoTj" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-facebook-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                        </td>
                                                                        <td align="left" valign="middle" class="mcnShareTextContent" style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Feepurl.com%2FgjLoTj" target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Share</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                    
                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody><tr>
                                                <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContentItemContainer">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="" class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody><tr>
                                                            <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody><tr>
                                                                        <td align="center" valign="middle" width="24" class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://twitter.com/intent/tweet?text=*|URL:MC_SUBJECT|*: http%3A%2F%2Feepurl.com%2FgjLoTj" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-twitter-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                        </td>
                                                                        <td align="left" valign="middle" class="mcnShareTextContent" style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://twitter.com/intent/tweet?text=*|URL:MC_SUBJECT|*: http%3A%2F%2Feepurl.com%2FgjLoTj" target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Tweet</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                    
                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody><tr>
                                                <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContentItemContainer">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="" class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody><tr>
                                                            <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody><tr>
                                                                        <td align="center" valign="middle" width="24" class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://us7.forward-to-friend.com/forward?u=bda88dde6351939572b55c93d&id=1f521d3bef&e=[UNIQID]" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-forwardtofriend-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                        </td>
                                                                        <td align="left" valign="middle" class="mcnShareTextContent" style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://us7.forward-to-friend.com/forward?u=bda88dde6351939572b55c93d&id=1f521d3bef&e=[UNIQID]" target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Forward</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                    
                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody><tr>
                                                <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContentItemContainer">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="" class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody><tr>
                                                            <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody><tr>
                                                                        <td align="center" valign="middle" width="24" class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="https://www.pinterest.com/pin/find/?url=http%3A%2F%2Feepurl.com%2FgjLoTj" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-pinterest-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                        </td>
                                                                        <td align="left" valign="middle" class="mcnShareTextContent" style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="https://www.pinterest.com/pin/find/?url=http%3A%2F%2Feepurl.com%2FgjLoTj" target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Pin</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                    
                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                            <tbody><tr>
                                                <td valign="top" style="padding-right: 0;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnShareContentItemContainer">
                                                    <table border="0" cellpadding="0" cellspacing="0" width="" class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <tbody><tr>
                                                            <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                    <tbody><tr>
                                                                        <td align="center" valign="middle" width="24" class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://www.linkedin.com/shareArticle?url=http%3A%2F%2Feepurl.com%2FgjLoTj&amp;mini=true&amp;title=*|URL:MC_SUBJECT|*" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-linkedin-48.png" style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" height="24" width="24" class=""></a>
                                                                        </td>
                                                                        <td align="left" valign="middle" class="mcnShareTextContent" style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                            <a href="http://www.linkedin.com/shareArticle?url=http%3A%2F%2Feepurl.com%2FgjLoTj&amp;mini=true&amp;title=*|URL:MC_SUBJECT|*" target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Share</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->
                                    
                                    <!--[if mso]>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

                </td>
            </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top-width: 2px;border-top-style: solid;border-top-color: #EEEEEE;">
                    <tbody><tr>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>
<!--            
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner">
                
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnTextContentContainer">
                    <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                        
                            <em>Copyright © *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>
<br>
*|IFNOT:ARCHIVE_PAGE|*
    *|LIST:DESCRIPTION|*
    <br>
    <br>
    <strong>Our mailing address is:</strong>
    <br>
    *|HTML:LIST_ADDRESS_HTML|* *|END:IF|*
    <br>
    <br>
	Want to change how you receive these emails?<br>
    You can <a href="*|UPDATE_PROFILE|*">update your preferences</a> or <a href="*|UNSUB|*">unsubscribe from this list</a>
    <br>
    <br>
    *|IF:REWARDS|* *|HTML:REWARDS|*
*|END:IF|*
                        </td>
                    </tr>
                </tbody></table>
                
            </td>
        </tr>
    </tbody>
</table></td>
                            </tr>
                        </table>
						<!--[if gte mso 9]>
						</td>
						</tr>
						</table>
						<![endif]-->
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>`

    return emailTemplate;
}

