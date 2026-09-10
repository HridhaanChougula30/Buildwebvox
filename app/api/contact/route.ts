import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, businessType, selectedServices, notes } = body;

    const targetEmail = 'hridhaanchougula30@gmail.com';

    // Format email payload details
    const emailSubject = encodeURIComponent(`[Buildwebvox Lead] Request from ${businessName || name}`);
    const emailBody = encodeURIComponent(
      `New Lead Submission for Buildwebvox:\n\n` +
      `Name: ${name}\n` +
      `Business Name: ${businessName}\n` +
      `Email: ${email}\n` +
      `Industry/Category: ${businessType}\n` +
      `Services Requested: ${Array.isArray(selectedServices) ? selectedServices.join(', ') : selectedServices}\n` +
      `Notes: ${notes || 'None'}\n\n` +
      `Submitted via Buildwebvox platform.`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    return NextResponse.json({
      success: true,
      message: `Lead submission processed for ${targetEmail}`,
      targetEmail,
      mailtoUrl,
      lead: {
        name,
        businessName,
        email,
        businessType,
        selectedServices,
        notes,
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process lead request' },
      { status: 500 }
    );
  }
}
