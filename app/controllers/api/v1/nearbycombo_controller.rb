module Api
  module V1
    class NearbycomboController < ApplicationController
      include Api::V1::NearbycomboHelper

      def index
        html = get_service_and_reviews
        script_variables = get_script_variables(html)
        render json: {
          data: get_service_and_reviews,
          script: script_variables
        }
      end
    end
  end
end
