require "rest-client"
require "nokogiri"

module Api
  module V1
    module NearbycomboHelper
      def get_service_and_reviews
        resource = "https://api.sidebox.com/plugin/nearbyserviceareareviewcombo"
        html = RestClient.get resource, {
          params: {
            storefronttoken: "#{ENV["STORE_FRONT_TOKEN"]}",
            state: "CA",
            city: "Agoura Hills",
            checkincount: 20,
            reviewcount: 20
          }
        }
        html
      end

      def get_script_variables(html)
        doc = Nokogiri::HTML(html)
        variables = doc.search('script[type="text/javascript"]')
        if variables.length > 0
          variables.first.content
        else
          ""
        end
      end
    end
  end
end
