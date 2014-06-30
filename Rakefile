require 'base64'
require 'erb'

def compile!
  File.write(
    'hello.rb',
    ERB.new(File.read('hello.rb.erb')).result(
      OpenStruct.new(
        html: Base64.encode64(File.read('template.html'))
      ).instance_eval { binding }
    )
  )
end

desc 'Compile the script and run the server'
task default: [ :compile, :server ]

desc 'Compile the script'
task :compile do
  compile!
end

desc 'Run the server'
task :server do
  warn '============================================'
  warn '= Starting server at http://localhost:3000 ='
  warn '============================================'

  system 'ruby hello.rb'
end

desc 'Remove generated files'
task :clean do
  rm 'hello.rb'
end
