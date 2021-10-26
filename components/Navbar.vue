<template>
  <header class="container mx-auto flex justify-between items-center py-4 mb-8">
    <div class="flex justify-between w-1/2">
      <Logo />

      <nav class="w-2/3">
        <ul class="flex justify-between font-bold">
          <li class="cursor-pointer hover:text-main transition-all">About Us</li>
          <li class="cursor-pointer hover:text-main transition-all">Courses</li>
          <li class="cursor-pointer hover:text-main transition-all">Events</li>
          <li class="cursor-pointer hover:text-main transition-all">Blog</li>
          <li class="cursor-pointer hover:text-main transition-all">Contacts</li>
        </ul>
      </nav>
    </div>

    <div class="flex items-center">
      <Button main class="mr-8">Get consultation</Button>

      <div>
        <svg class="inline-block" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00007 1.70866C7.38924 1.70866 6.08341 3.0145 6.08341 4.62533C6.08341 6.23616 7.38924 7.54199 9.00007 7.54199C10.6109 7.54199 11.9167 6.23616 11.9167 4.62533C11.9167 3.0145 10.6109 1.70866 9.00007 1.70866ZM4.41674 4.62533C4.41674 2.09402 6.46877 0.0419922 9.00007 0.0419922C11.5314 0.0419922 13.5834 2.09402 13.5834 4.62533C13.5834 7.15663 11.5314 9.20866 9.00007 9.20866C6.46877 9.20866 4.41674 7.15663 4.41674 4.62533Z" fill="#424551"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.08679 11.7087C3.50902 11.7087 3.05743 11.99 2.87412 12.3942C2.62041 12.9536 2.39065 13.6196 2.33644 14.2513C2.3122 14.5337 2.42994 14.7418 2.59218 14.8426C3.44981 15.3753 5.43707 16.292 9.00007 16.292C12.5631 16.292 14.5503 15.3753 15.408 14.8426C15.5702 14.7418 15.6879 14.5337 15.6637 14.2513C15.6095 13.6196 15.3797 12.9536 15.126 12.3942C14.9427 11.99 14.4911 11.7087 13.9134 11.7087H4.08679ZM1.35626 11.7058C1.86288 10.5887 2.99416 10.042 4.08679 10.042H13.9134C15.006 10.042 16.1373 10.5887 16.6439 11.7058C16.9349 12.3474 17.2471 13.2099 17.3243 14.1088C17.3945 14.9273 17.0543 15.7819 16.2874 16.2583C15.1595 16.959 12.8664 17.9587 9.00007 17.9587C5.13374 17.9587 2.84066 16.959 1.71271 16.2583C0.945825 15.7819 0.605625 14.9273 0.675878 14.1088C0.753027 13.2099 1.06527 12.3474 1.35626 11.7058Z" fill="#424551"/>
        </svg>

        <a class="cursor-pointer hover:text-main transition-all" href="#">Log in</a>
        /
        <a class="cursor-pointer hover:text-main transition-all" href="#">Register</a>
      </div>
    </div>

  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>