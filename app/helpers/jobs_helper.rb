module JobsHelper
  def render_job_status(job)
    if job.is_hidden
            content_tag(:span, "", :class => "fa fa-rocket")
             else
             content_tag(:span, "", :class => "fa fa-globe")
            end
          end
end
