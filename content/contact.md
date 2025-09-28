+++
heroTitle = "Contact us"
heroLead = "Are you interested in building<br>your next big idea with us?"
heroClass = "contact"
title = "Contact"
+++

{{ $sent := (.Get "sent") }}
{{ $message := (.Get "message") }}
{{ if and $sent $message }}
<div class="mail-success">
  <p class="c-heading-2">{{ $message | safeHTML }}</p>
</div>
<style>
.mail-success {background-image:url(/assets/contact/check-animation-v2.gif);background-size:contain;background-repeat:no-repeat;background-position:center;background-position-y:-50px;padding-top:120px;margin-bottom:40px;text-align:center;}
</style>
{{ else }}
<h1>We'd love to hear from you!</h1>
<p>
Tell us about your ideas or projects you want to involve us in and we will get back to you as soon as possible.
If you have any other questions, comments, or concerns, please fill out the form below.
</p>
<form action="https://formspree.io/f/your-id" method="post">
  <div class="form-group">
    <label for="first_name" class="form">First Name</label>
    <input type="text" class="form-control form" id="first_name" name="first_name" required>
    <label for="last_name" class="form">Last Name</label>
    <input type="text" class="form-control form" id="last_name" name="last_name" required>
  </div>
  <div class="form-group">
    <label for="email" class="form">Email</label>
    <input type="email" class="form-control form" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="regarding" class="form">Regarding</label>
    <select name="regarding" id="regarding" class="form" required>
      <option value="" selected disabled>Select an option</option>
      <option value="Hiring">Hiring</option>
      <option value="Project">Project</option>
      <option value="Consulting">Consulting</option>
      <option value="Question">Question</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message" class="form">Message</label>
    <textarea class="form-control form" id="message" name="message" rows="3" required></textarea>
  </div>
  <button type="submit" class="form btn btn-primary">Submit</button>
</form>
{{ end }}
