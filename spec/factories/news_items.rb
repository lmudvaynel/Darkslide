# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :news_item do
    title "MyString"
    description "MyString"
    content "MyText"
    published_at "2014-02-20 10:51:42"
  end
end
